import { inject } from 'aurelia-framework';
import { UserService } from '../api/user-service';
import { AuthService } from '../api/auth/auth-service';

@inject(UserService, AuthService)
export class NavBar {

  private authenticated: boolean;
  private user;

  constructor(private readonly userService: UserService, 
              private readonly authService: AuthService) {
    console.log('constructed')
  }

  created(): void {
    console.log('created')
    // if(this.isAuthenticated()) {
    //   this.authenticated = true;
    //   this.getCurrentUser();
    // } else {
    //   this.authenticated = false;
    //   this.user = null;
    // }
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  private isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  getCurrentUser(): void {
    this.userService.getCurrentUserData().then(
      success => {
        this.user = success;
      },
      failure => {
        console.error(failure);
    });
  }

}
