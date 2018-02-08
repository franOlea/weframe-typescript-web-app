import { inject } from 'aurelia-framework';
import { HttpService } from './http-service';
import environment from '../environment';

export class ApiService {

  constructor(protected readonly httpService: HttpService, 
              protected readonly entityPath: string, 
              protected readonly timeout: number) {}

  get(page: number, size: number) {
    console.log(`Retrieving ${size} entities from ${this.entityPath} page ${page}`);
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(this.entityPath)
        .asGet()
        .withTimeout(this.timeout)
        .withParams({ page: page, size: size })
        .send()
        .then(this.getSuccess, failure => {
          this.getFailure(failure);
          reject(failure);
        });
    });
    return promise;
  }

  getById(id: number) {
    console.log(`Retrieving from ${this.entityPath} by id ${id}`);
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(`${this.entityPath}/${id}`)
        .asGet()
        .withTimeout(this.timeout)
        .send()
        .then(this.getSuccess, failure => {
          this.getFailure(failure);
          reject(failure);
        });

    })
  }

  getCount() {
    console.log(`Getting ${this.entityPath} count`);
    var _self = this;
    var promise = new Promise(function (resolve, reject) {
      _self.httpService.request(`${this.entityPath}/count`)
        .asGet()
        .withTimeout(this.timeout)
        .send()
        .then(this.getSuccess, failure => {
          this.getFailure(failure);
          reject(failure);
        });
    });
    return promise;
  }

  post(user) {
    console.log(`Posting to ${this.entityPath}`);
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(`${this.entityPath}`)
        .asPost()
        .withTimeout(this.timeout)
        .withContent(user)
        .send()
        .then(success => {
          console.log(`${this.entityPath} response status ${success.statusCode}`);
          if(success.statusCode == 200) {
            resolve();
          } else {
            reject(success);
          }
        }, failure => {
          reject(failure);
        });
    });
    return promise;
  }

  private getSuccess = function (success) {
    console.log(`${this.entityPath} response status ${success.statusCode}`);
    if (success.statusCode == 200) {
      return JSON.parse(success.response);
    } else {
      return null;
    }
  }

  protected getFailure = function (failure) {
    console.log(`${this.entityPath} resquest failed`);
    console.log(failure);
  }

}