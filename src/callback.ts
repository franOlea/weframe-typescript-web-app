import { inject } from 'aurelia-framework';
import { AuthService } from './auth-service';

@inject(AuthService)
export class Callback {
  private auth: AuthService

  constructor(auth: AuthService) {
    console.log("callback!");
    this.auth = auth;
    this.auth.handleAuthentication();
  }
}