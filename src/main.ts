import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import { WebAuth } from 'auth0-js';
import { Router } from 'aurelia-router';

import { AuthService } from './api/auth/auth-service';
import { HttpService } from './api/http/http-service';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-bootstrap', config => config.options.version = 4);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  let auth0 = getAuth0();
  let httpService = new HttpService();
  let authService = new AuthService(auth0, httpService);
  authService.initialize();

  aurelia.container.registerSingleton(WebAuth, () => {
    return auth0;
  });

  aurelia.container.registerSingleton(HttpService, () => {
    return httpService;
  });

  aurelia.container.registerSingleton(AuthService, () => {
    return authService;
  });

  aurelia.start().then(() => aurelia.setRoot());
  
}



function getAuth0(): WebAuth {
  return new WebAuth({
    domain: environment.auth0Domain,
    clientID: environment.auth0ClientID,
    redirectUri: environment.auth0RedirectUri,
    audience: environment.auth0Audience,
    responseType: environment.auth0ResponseType,
    scope: environment.auth0Scope
  });
}