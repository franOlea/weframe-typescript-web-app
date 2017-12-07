import { WebAuth } from 'auth0-js';
import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Router, EventAggregator)
export class AuthService {
  private router: Router;
  private eventAggregator: EventAggregator;
  private auth0: WebAuth;

  constructor(router: Router, eventAggregator: EventAggregator) {
    console.log("auth-service created");
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
  }
  
  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      console.log(err);
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log("Handling auth...");
        this.setSession(authResult);
        this.router.navigate('home');
        this.eventAggregator.publish('authChange', { authenticated: true });
      } else if (err) {
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    console.log(authResult);
    console.log(expiresAt);
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate('home');
    this.eventAggregator.publish('authChange', false);
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}