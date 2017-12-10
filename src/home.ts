import { inject } from 'aurelia-framework';
import { NewInstance } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './api/auth-service';

@inject(AuthService, EventAggregator)
export class Home {

  private authenticated: boolean;

  constructor(private auth: AuthService, private eventAggregator: EventAggregator) {
    this.authenticated = auth.isAuthenticated();
    this.eventAggregator.subscribe('authChange', (authenticated) => {
      this.authenticated = authenticated;
    });
  }

}