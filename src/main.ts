import {Aurelia} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {WebAuth} from 'auth0-js';

import environment from './environment';

import {AuthService} from './api/auth/auth-service';
import {HttpService} from './api/http/http-service';
import {UserService} from './api/user-service';
import {FrameService} from "./product/frame/frame-service";

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

  const auth0 = getAuth0();
  const httpClient = getHttpClient();
  const httpService = new HttpService(httpClient);
  const authService = new AuthService(auth0, httpService);
  authService.initialize();

  aurelia.container.registerSingleton(AuthService, () => {
    return authService;
  });

  aurelia.container.registerSingleton(UserService, () => {
    return new UserService(httpService);
  });

  aurelia.container.registerSingleton("FrameService", () => {
    return new FrameService(httpService);
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

function getHttpClient(): HttpClient {
  return new HttpClient().configure(configuration => {
    configuration.withBaseUrl(environment.webApiUrl);
    configuration.withCredentials(true);
  });
}
