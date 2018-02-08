import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { UserService } from '../new-api/user-service';
import { AuthAware } from '../new-api/auth-aware';
import { AuthService } from '../new-api/auth-service';

@inject(EventAggregator, UserService)
export class NavBar extends AuthAware {

  private user;

  constructor(eventAggregator: EventAggregator, 
              private readonly authService: AuthService, 
              private readonly userService: UserService) {
    super(eventAggregator)
  }
  
  protected onAuthenticaticated(): void {
    this.getCurrentUser();
  }
  protected onUnauthenticated(): void {
    this.user = null;
  }

  getCurrentUser() {
    this.userService.getCurrentUserData().then(
      success => {
        console.log(success);
        this.user = success;
      },
      failure => {
        console.log(failure);
    });
  }

}