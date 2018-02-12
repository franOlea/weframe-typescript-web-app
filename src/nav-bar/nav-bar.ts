import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { UserService } from '../api/user-service';
import { AuthAware } from '../api/auth-aware';
import { AuthService } from '../api/auth-service';

@inject(EventAggregator, AuthService, UserService)
export class NavBar extends AuthAware {

  private user;

  constructor(eventAggregator: EventAggregator, 
              private readonly authService: AuthService, 
              private readonly userService: UserService) {
    super(eventAggregator)
    this.initializeAuthAware();
  }
  
  protected onAuthenticaticated(): void {
    console.log("Authenticated, getting user data.");
    this.getCurrentUser();
  }
  protected onUnauthenticated(): void {
    console.log("Unauthenticated, doing nothing.");
    this.user = null;
  }

  getCurrentUser() {
    this.userService.getCurrentUserData().then(
      success => {
        this.user = success;
      },
      failure => {
        console.error(failure);
    });
  }

}