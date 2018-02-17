import { HttpClient } from 'aurelia-http-client';
import { inject } from 'aurelia-framework';
import environment from '../../environment';

import { AuthListener } from '../auth/auth-listener';

export class HttpService implements AuthListener {

  private token: string;
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = this.createClient();
  }

  request(path) {
    var _self = this;
    return this.httpClient.createRequest(path)
      .withInterceptor({
        request(request) {
          if(_self.token != null) {
            request.headers.add('Authorization', `Bearer ${_self.token}`);
          }
          return request;
        }
      });
  }

  onAuthenticated(token: string) {
    this.token = token;
    console.log("Authenticated. " + token);
  }
  onUnauthenticated() {
    this.token = null;
    console.log("Unauthenticated. " + this.token);
  }

  isAuthenticated(): boolean {
    if(this.token != null) {
      return true;
    } else {
      return false;
    }
  }

  private createClient(): HttpClient {
    return new HttpClient()
      .configure(configuration => {
        configuration.withBaseUrl(environment.webApiUrl);
        configuration.withCredentials(true);
      });
  }
}