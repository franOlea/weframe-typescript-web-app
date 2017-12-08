import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './auth-service';

@inject(AuthService, EventAggregator)
export class Home {

  private auth: AuthService;
  private eventAggregator: EventAggregator;
  private authenticated: boolean;

  constructor(auth: AuthService, eventAggregator: EventAggregator) {
    this.auth = auth;
    this.eventAggregator = eventAggregator;
    this.authenticated = auth.isAuthenticated();
    this.eventAggregator.subscribe('authChange', (authenticated) => {
      this.authenticated = authenticated;
    });
  }

}