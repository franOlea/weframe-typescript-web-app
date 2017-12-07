import { inject } from 'aurelia-framework';
import { AuthService } from './auth-service';

@inject(AuthService)
export class Home {
    private auth: AuthService;
    constructor(auth: AuthService) {
        this.auth = auth;
    }
}