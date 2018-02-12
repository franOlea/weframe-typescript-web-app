import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './auth-service';
import { AuthenticationAware } from './authentication-aware';
import environment from '../environment';

@inject(EventAggregator, AuthService)
export class RestService extends AuthenticationAware {
    
    private httpClient: HttpClient;
    private authService: AuthService

    constructor(eventAggregator: EventAggregator, authService: AuthService) {
        super(eventAggregator);
        this.httpClient = this.createUnauthenticatedClient();
        this.authService = authService;
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getClient() {
        return this.httpClient;
    }

    protected authenticationChanged(authChange) {
        if(authChange.authenticated) {
            console.log("Authenticated, created http client with access token.");
            this.httpClient = this.createAuthenticatedClient(authChange.accessToken);
        } else {
            console.log("Logged out, created default http client.");
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
                configuration.withCredentials(true)
                configuration.withHeader('Authorization', `Bearer ${accessToken}`);
        });
    }
}