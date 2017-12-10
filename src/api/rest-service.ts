import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './auth-service';
import environment from '../environment';

@inject(EventAggregator, AuthService)
export class RestService {
    
    private httpClient: HttpClient;

    constructor(eventAggregator: EventAggregator, authService: AuthService) {
        eventAggregator.subscribe(environment.authChangeEvent, authChange => {
			if(authChange.authenticated) {
                this.httpClient = this.createAuthenticatedClient(authChange.accessToken);
                console.log("Authenticated, created http client with access token.");
            } else {
                this.httpClient = this.createUnauthenticatedClient();
                console.log("Logged out, created default http client.");
            }
        });
        if(authService.isAuthenticated()) {
            this.httpClient = this.createAuthenticatedClient(authService.getToken().accessToken);
        } else {
            this.httpClient = this.createUnauthenticatedClient();
        }
    }

    private createUnauthenticatedClient(): HttpClient {
        return new HttpClient()
            .configure(configuration => {
            configuration.withBaseUrl(environment.webApiUrl);
        });
    }

    private createAuthenticatedClient(accessToken): HttpClient {
        return new HttpClient()
            .configure(configuration => {
            configuration.withBaseUrl(environment.webApiUrl);
            configuration.withHeader('Authorization', `Bearer ${accessToken}`);
        });
    }

    getClient() {
        return this.httpClient;
    }
}