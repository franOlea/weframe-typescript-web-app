import { EventAggregator } from 'aurelia-event-aggregator';
import environment from '../environment';

export abstract class AuthAware {

    constructor(eventAggregator: EventAggregator) {
        eventAggregator.subscribe(environment.authStateEvent, (authenticated) => {
            this.onAuthenticationChanged(authenticated);
        });
    }

    protected abstract onAuthenticationChanged(authenticated): void;

}