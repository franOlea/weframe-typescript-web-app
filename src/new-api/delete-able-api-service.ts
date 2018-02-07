import { ApiService } from './api-service';
import { RestService } from './rest-service';
import environment from '../environment';

export class DeleteAbleApiService extends ApiService {

  constructor(restService: RestService, entityPath: string, timeout: number) {
    super(restService, entityPath, timeout);
  }

  delete(id: number) {
    console.log(`Deleting from ${this.entityPath} by id ${id}`);
    var promise = new Promise((resolve, reject) => {
      this.restService.request(`${this.entityPath}/${id}`)
        .asDelete()
        .withTimeout(this.timeout)
        .send()
        .then(success => {
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