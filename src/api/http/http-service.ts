import { HttpClient } from 'aurelia-http-client';
import { RequestBuilder } from 'aurelia-http-client';

import { AuthListener } from '../auth/auth-listener';

export class HttpService implements AuthListener {

  private token: string;

  constructor(private readonly httpClient: HttpClient) {
  }

  request(path): RequestBuilder {
    var _self = this;
    return this.httpClient.createRequest(path)
      .withInterceptor({
        request(request) {
          if(_self.token != null) {
            request.headers.add('Authorization', `Bearer ${_self.token}`);
          }
          return request;
        }
      })
      .withInterceptor({
          request(request) {
            console.log(`${request.method} ${request.buildFullUrl()}`);
            return request;
          },
          response(response) {
            console.log(`${response.requestMessage.method} ${response.requestMessage.buildFullUrl()} ${response.statusCode}`);
            return response;
          }
      });
  }

  onAuthenticated(token: string): void {
    this.token = token;
  }
  onUnauthenticated(): void {
    this.token = null;
  }

  isAuthenticated(): boolean {
    if(this.token != null) {
      return true;
    } else {
      return false;
    }
  }
}