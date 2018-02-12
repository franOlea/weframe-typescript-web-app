import { WebAuth } from 'auth0-js';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../environment'

@inject(Router, EventAggregator)
export class AuthService {

  private router: Router;
  private eventAggregator: EventAggregator;
  private auth0: WebAuth;

  constructor(router: Router, eventAggregator: EventAggregator) {
    this.router = router;
    this.eventAggregator = eventAggregator;
    this.auth0 = new WebAuth({
      domain: 'weframe.auth0.com',
      clientID: 'T4odJUBxMAikG5P6sEaq7wk5OqdabVYL',
      redirectUri: 'http://localhost:9000/callback',
      audience: 'http://localhost:8080',
      responseType: 'token id_token',
      scope: 'openid'
    });
    this.init();
  }
  
  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log("Login successful for user " + authResult.idTokenPayload.sub);
        this.eventAggregator.publish("environment.tokenStateEvent", { 
          authenticated: true, 
          accessToken: authResult.access_token 
        });
        this.router.navigate('home');
      } else if (err) {
        console.log(err);
      }
    });
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    console.log("Tokens removed.");
    this.router.navigate('home');
    this.eventAggregator.publish("environment.tokenStateEvent", false);
  }

  private getToken() {
    if(this.isAuthenticated()) {
      return {
        accessToken: localStorage.getItem('access_token'), 
        idToken: localStorage.getItem('id_token')
      };
    } else {
      return null;
    }
  }

  private isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  private init() {
    if(this.isAuthenticated()) {
      var token = this.getToken();
      this.eventAggregator.publish("environment.authStateEvent", { 
        authenticated: true, 
        accessToken: token.accessToken
      });
    }
  }

  private setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

}