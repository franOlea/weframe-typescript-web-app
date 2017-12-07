import {Router, RouterConfiguration} from 'aurelia-router';
import { inject } from 'aurelia-framework';
import { AuthService } from './auth-service';

@inject(AuthService)
export class App {
  private router: Router;
  private auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  configureRouter(config: RouterConfiguration, router: Router){
        config.options.pushState = true;
        config.map([
          { route: ['', 'home'],    moduleId: './home',     nav: true,  name: 'home'},
          { route: 'callback',      moduleId: './callback', nav: false, name: 'callback' }
        ]);

        this.router = router;
  }
}
