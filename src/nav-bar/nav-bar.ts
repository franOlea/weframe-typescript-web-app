import { inject } from 'aurelia-framework';
import { UserService } from '../api/user-service';
import { AuthService } from '../api/auth/auth-service';

@inject(UserService, AuthService)
export class NavBar {

  private user;

  constructor(private readonly userService: UserService, 
              private readonly authService: AuthService) {}

  created() {
    console.log("Nav bar created " + this.isAuthenticated());
    if(this.isAuthenticated()) {
      this.getCurrentUser();
    } else {
      this.user = null;
    }
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  private isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  getCurrentUser() {
    this.userService.getCurrentUserData().then(
      success => {
        console.log(success);
        this.user = success;
      },
      failure => {
        console.error(failure);
    });
  }

}