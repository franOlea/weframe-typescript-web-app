import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { AuthService } from '../api/auth-service';
import { AuthenticationAware } from '../api/authentication-aware';
import { UserService } from '../api/user/user-service';

@inject(EventAggregator, AuthService, UserService)
export class NavBar extends AuthenticationAware {

  private authService: AuthService;
  private userService: UserService;
  private user;

  constructor(eventAggregator: EventAggregator, authService: AuthService, userService: UserService) {
    super(eventAggregator)
    this.authService = authService;
    this.userService = userService;
  }

  protected authenticationChanged() {
    if(this.authenticated) {
      this.getCurrentUser();
    }
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