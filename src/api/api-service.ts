import { HttpService } from './http/http-service';

export class ApiService {

  constructor(protected readonly httpService: HttpService, 
              protected readonly entityPath: string, 
              protected readonly timeout: number) {}

  get(page: number = 0, size: number = 10) {
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(this.entityPath)
        .asGet()
        .withTimeout(this.timeout)
        .withParams({ page: page, size: size })
        .send()
        .then(success => {
          if (success.statusCode == 200) {
            resolve(this.mapGetResponse(JSON.parse(success.response)));
          } else {
            console.error(success);
            reject(success);
          }
        }, failure => {
          console.error(failure);
          reject(failure);
        });
    });
    return promise;
  }

  getById(id: number) {
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(`${this.entityPath}/${id}`)
        .asGet()
        .withTimeout(this.timeout)
        .send()
        .then(success => {
          if (success.statusCode == 200) {
            resolve(this.mapGetResponse(JSON.parse(success.response)));
          } else {
            console.error(success);
            reject(success);
          }
        }, failure => {
          console.error(failure);
          reject(failure);
        });

    })
  }

  mapGetResponse(response: any): {page: any, body: any[]} {
    return {page: response.page, body: response._embedded};
  }

  post(entity) {
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(`${this.entityPath}`)
        .asPost()
        .withTimeout(this.timeout)
        .withContent(entity)
        .send()
        .then(success => {
          if(success.statusCode == 200) {
            resolve();
          } else {
            console.error(success);
            reject(success);
          }
        }, failure => {
          console.error(failure);
          reject(failure);
        });
    });
    return promise;
  }

  

}