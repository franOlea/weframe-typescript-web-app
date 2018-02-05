import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../environment';

export abstract class AuthenticationAware {

    protected authenticated: boolean;

    constructor(eventAggregator: EventAggregator) {
        eventAggregator.subscribe(environment.tokenStateEvent, (authChange) => {
            this.authenticated = authChange.authenticated;
            this.authenticationChanged(authChange);
        });
    }

    protected abstract authenticationChanged(authChange): void;

}