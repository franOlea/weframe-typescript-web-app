import { inject } from 'aurelia-framework';
import { RestService } from '../old-api/rest-service';
import { ApiDeleteAbleService } from '../old-api/api-delete-able-service';

@inject(RestService)
export class FrameService extends ApiDeleteAbleService {

    constructor(restService: RestService) {
        super(restService, '/frames', 3000);
    }

}