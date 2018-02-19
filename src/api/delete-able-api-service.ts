import { ApiService } from './api-service';
import { HttpService } from './http/http-service';
import environment from '../environment';

export class DeleteAbleApiService extends ApiService {

  constructor(httpService: HttpService, entityPath: string, timeout: number) {
    super(httpService, entityPath, timeout);
  }

  delete(id: number) {
    var promise = new Promise((resolve, reject) => {
      this.httpService.request(`${this.entityPath}/${id}`)
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
          console.error(failure);
          reject(failure);
        });

    })
  }

}