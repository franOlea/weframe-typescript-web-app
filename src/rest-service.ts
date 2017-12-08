import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import environment from './environment';

@inject(EventAggregator)
export class RestService {
    
    private httpClient: HttpClient;
    private eventAggregator: EventAggregator;

    constructor(eventAggregator) {
        this.httpClient = this.createUnauthenticatedClient();
		this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(environment.authChangeEvent, authChange => {
			if(authChange.authenticated) {
                this.httpClient = this.createAuthenticatedClient(authChange.accessToken);
            } else {
                this.httpClient = this.createUnauthenticatedClient();
            }
		});
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
            configuration.withHeader('Authorization', 'Bearer ' + accessToken);
        });
    }

    getClient() {
        return this.httpClient;
    }
}