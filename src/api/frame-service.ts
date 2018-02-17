import { inject } from 'aurelia-framework';
import { DeleteAbleApiService } from './delete-able-api-service';
import { HttpService } from './http/http-service';
import environment from '../environment';

@inject(HttpService)
export class FrameService extends DeleteAbleApiService {

  constructor(httpService: HttpService) {
    super(httpService, "/frames", environment.httpServiceTimeout);
  }

}