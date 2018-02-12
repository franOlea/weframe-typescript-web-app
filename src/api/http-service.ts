import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './auth-service';
import environment from '../environment';

@inject(EventAggregator, AuthService)
export class HttpService {

  private authenticated: boolean;
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
    this.subscribeToNewListeners(eventAggregator);
  }

  private subscribeToTokenStateEvent(eventAggregator: EventAggregator) {
    eventAggregator.subscribe(environment.tokenStateEvent, (event) => {
      this.authenticated = event.authenticated;
      if(this.authenticated) {
        this.httpClient = this.createAuthenticatedClient(event.accessToken);
      } else {
        this.httpClient = this.createUnauthenticatedClient();
      }
      eventAggregator.publish(environment.authStateEvent, {
        authenticated: this.authenticated
      });
    });
  }

  private subscribeToNewListeners(eventAggregator: EventAggregator) {
    var isAuthenticated = this.authenticated;
    eventAggregator.subscribe(environment.newAuthStateEvent, (event) => {
      console.log("Received new auth state listener, publishing state to: " + event.listenerId);
      eventAggregator.publish(event.listenerId, {
        authenticated: isAuthenticated
      });
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