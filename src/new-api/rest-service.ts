import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './auth-service';
import environment from '../environment';

@inject(EventAggregator, AuthService)
export class RestService {

  private httpClient: HttpClient;

  constructor(eventAggregator: EventAggregator, authService: AuthService) {
    this.httpClient = this.createUnauthenticatedClient();
    this.initialize(eventAggregator, authService);
  }

  request(path) {
    return this.httpClient.createRequest(path);
  }

  private initialize(eventAggregator: EventAggregator, authService: AuthService) {
    this.subscribeToTokenStateEvent(eventAggregator);
    authService.publishSessionState();
  }

  private subscribeToTokenStateEvent(eventAggregator: EventAggregator) {
    eventAggregator.subscribe(environment.tokenStateEvent, (authChange) => {
        if(authChange.authenticated) {
          this.httpClient = this.createAuthenticatedClient(authChange.accessToken);
          this.publishAuthenticated(eventAggregator);
          console.log("Authenticated, created http client with access token.");
        } else {
          this.httpClient = this.createUnauthenticatedClient();
          this.publishUnauthenticated(eventAggregator);
          console.log("Logged out, created default http client.");
        }
    });
  }

  private publishAuthenticated(eventAggregator: EventAggregator) {
    eventAggregator.publish(environment.authStateEvent, {
      authenticated: true
    });
  }

  private publishUnauthenticated(eventAggregator: EventAggregator) {
    eventAggregator.publish(environment.authStateEvent, {
      authenticated: false
    });
  }

  private createUnauthenticatedClient(): HttpClient {
    return new HttpClient().configure(configuration => {
      configuration.withBaseUrl(environment.webApiUrl);
    });
  }

  private createAuthenticatedClient(accessToken): HttpClient {
    return new HttpClient()
      .configure(configuration => {
        configuration.withBaseUrl(environment.webApiUrl);
        configuration.withCredentials(true);
        configuration.withHeader('Authorization', `Bearer ${accessToken}`);
      });
  }
}