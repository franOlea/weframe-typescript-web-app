import {Router, RouterConfiguration} from 'aurelia-router';

export class App {

  private router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router){
        config.options.pushState = true;
        config.map([
          { route: ['', 'home'],    moduleId: './home',                 nav: true,  name: 'home'},
          { route: 'callback',      moduleId: './api/login-callback',   nav: false, name: 'callback' }
        ]);

        this.router = router;
  }
  
}
