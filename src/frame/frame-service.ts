import { inject } from 'aurelia-framework';
import { RestService } from '../api/rest-service';
import { ApiDeleteAbleService } from '../api/api-delete-able-service';

@inject(RestService)
export class FrameService extends ApiDeleteAbleService {

    constructor(restService: RestService) {
        super(restService, '/frames', 3000);
    }

}