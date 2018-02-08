import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../environment';

export abstract class AuthAware {

    constructor(eventAggregator: EventAggregator) {
        eventAggregator.subscribe(environment.authStateEvent, (authenticated) => {
            if(authenticated) {
                this.onAuthenticaticated();
            } else {
                this.onUnauthenticated();
            }
        });
    }

    protected abstract onAuthenticaticated(): void;
    protected abstract onUnauthenticated(): void;

}