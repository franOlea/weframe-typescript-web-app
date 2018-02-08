import { ApiService } from './api-service';
import { HttpService } from './http-service';
import environment from '../environment';

export abstract class DeleteAbleApiService extends ApiService {

  constructor(httpService: HttpService, entityPath: string, timeout: number) {
    super(httpService, entityPath, timeout);
  }

  delete(id: number) {
    console.log(`Deleting from ${this.entityPath} by id ${id}`);
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(`${this.entityPath}/${id}`)
        .asDelete()
        .withTimeout(this.timeout)
        .send()
        .then(success => {
          console.log(`${this.entityPath} response status ${success.statusCode}`);
          if(success.statusCode == 200) {
            resolve();
          } else {
            reject(success);
          }
        }, failure => {
          this.getFailure(failure);
          reject(failure);
        });

    })
  }

}