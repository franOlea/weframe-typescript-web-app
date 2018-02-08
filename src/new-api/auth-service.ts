import { WebAuth } from 'auth0-js';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../environment'

@inject(Router, EventAggregator)
export class AuthService {

  private readonly auth0: WebAuth;

  constructor(private readonly router: Router, 
              private readonly eventAggregator: EventAggregator) {
    this.initialize();
    this.auth0 = new WebAuth({
      domain: 'weframe.auth0.com',
      clientID: 'T4odJUBxMAikG5P6sEaq7wk5OqdabVYL',
      redirectUri: 'http://localhost:9000/callback',
      audience: 'http://localhost:8080',
      responseType: 'token id_token',
      scope: 'openid'
    });
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    this.deleteToken();
    console.log("Tokens removed.");
    this.publishUnauthenticated();
    this.router.navigate('home');
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.persistToken(authResult);
        console.log("Login successful for user " + authResult.idTokenPayload.sub);
        this.publishToken(authResult.access_token);
      } else if (err) {
        console.log(err);
        this.publishUnauthenticated();
      } else {
        console.error("Login unsuccessful with unknown error.");
        this.publishUnauthenticated();
      }
      this.router.navigate('home');
    });
  }

  publishSessionState() {
    if (this.hasExpiredToken()) {
      this.publishUnauthenticated();
    } else {
      this.publishToken(this.loadToken().accessToken);
    }
  }

  private initialize() {
    this.publishSessionState();
  }

  private publishToken(token) {
    this.eventAggregator.publish(environment.tokenStateEvent, {
      authenticated: true,
      accessToken: token
    });
  }

  private publishUnauthenticated() {
    this.eventAggregator.publish(environment.tokenStateEvent, {
      authenticated: false
    });
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