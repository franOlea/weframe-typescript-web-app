import { inject } from 'aurelia-framework';
import { RestService } from './rest-service';
import environment from '../environment';

export class ApiService {

  protected restService: RestService;
  protected entityPath: string;
  protected timeout: number;

  constructor(restService: RestService, entityPath: string, timeout: number) {
    this.restService = restService;
    this.entityPath = entityPath;
    this.timeout = timeout;
  }

  get(page: number, size: number) {
    console.log(`Retrieving ${size} entities from ${this.entityPath} page`);
    var promise = new Promise((resolve, reject) => {
      this.restService.getClient()
        .createRequest(this.entityPath)
        .asGet()
        .withTimeout(this.timeout)
        .withParams({ page: page, size: size })
        .send()
        .then(this.promiseSuccess, failure => {
          this.promiseFailure(failure);
          reject(failure);
        });
    });
    return promise;
  }

  getById(id: number) {
    console.log(`Retrieving from ${this.entityPath} by id ${id}`);
    var promise = new Promise((resolve, reject) => {
      this.restService.getClient()
        .createRequest(`${this.entityPath}/${id}`)
        .asGet()
        .withTimeout(this.timeout)
        .send()
        .then(this.promiseSuccess, failure => {
          this.promiseFailure(failure);
          reject(failure);
        });

    })
  }

  getCount() {
    console.log(`Getting ${this.entityPath} count`);
    var _self = this;
    var promise = new Promise(function (resolve, reject) {
      _self.restService.getClient().createRequest(`${this.entityPath}/count`)
        .asGet()
        .withTimeout(this.timeout)
        .send()
        .then(this.promiseSuccess, failure => {
          this.promiseFailure(failure);
          reject(failure);
        });
    });
    return promise;
  }

  post(user) {
    console.log(`Posting to ${this.entityPath}`);
    var promise = new Promise((resolve, reject) => {
      this.restService.getClient().createRequest(`${this.entityPath}`)
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

  private promiseSuccess = function (success) {
    console.log(`${this.entityPath} response status ${success.statusCode}`);
    if (success.statusCode == 200) {
      return JSON.parse(success.response);
    } else {
      return null;
    }
  }

  protected promiseFailure = function (failure) {
    console.log(`${this.entityPath} resquest failed`);
    console.log(failure);
  }

}