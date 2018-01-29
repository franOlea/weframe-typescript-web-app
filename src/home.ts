import { inject } from 'aurelia-framework';
import { NewInstance } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from './api/auth-service';
import { RestService } from './api/rest-service';

@inject(AuthService, EventAggregator, RestService)
export class Home {

  private authenticated: boolean;
  private user: string;

  constructor(private auth: AuthService, private eventAggregator: EventAggregator, private restService: RestService) {
    this.authenticated = auth.isAuthenticated();
    this.eventAggregator.subscribe('authChange', (authenticated) => {
      this.authenticated = authenticated;
    });
  }

  test() {
    console.log("test");
    this.restService.getClient().createRequest("http://localhost:8080/users/me")
        .asGet()
        .withTimeout(3000)
        .send()
        .then(success => {
          console.log(success);
          this.user = success.response;
        }, failure => {
          console.log(failure);
        });
  }

}