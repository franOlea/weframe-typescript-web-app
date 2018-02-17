import { WebAuth } from 'auth0-js';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../../environment'

import { AuthListener } from './auth-listener';

export class AuthService {

  constructor(private readonly auth0: WebAuth,
              private readonly listener: AuthListener) {}

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.deleteToken();
    console.log("Tokens removed.");
    this.listener.onUnauthenticated();
    location.reload(true);
  }

  handleAuthentication(): Promise<void> {
    return new Promise((resolve) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          console.log(authResult);
          this.persistToken(authResult);
          this.listener.onAuthenticated(authResult.accessToken);
          console.log("Login successful for user " + authResult.idTokenPayload.sub);
          resolve();
        } else if (err) {
          console.log(err);
          this.listener.onUnauthenticated();
          resolve();
        } else {
          console.error("Login unsuccessful with unknown error.");
          this.listener.onUnauthenticated();
          resolve();
        }
      });
    });
  }

  initialize() {
    if (this.hasExpiredToken()) {
      this.listener.onUnauthenticated();
    } else {
      this.listener.onAuthenticated(this.loadToken().accessToken);
    }
  }

  private persistToken(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  private deleteToken() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  private loadToken() {
    if (this.hasExpiredToken()) {
      return null;
    } else {
      return {
        accessToken: localStorage.getItem('access_token'),
        idToken: localStorage.getItem('id_token')
      };
    }
  }

  private hasExpiredToken(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() > expiresAt;
  }

}