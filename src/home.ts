import { inject } from 'aurelia-framework';

import { DeleteAbleApiService } from './api/delete-able-api-service';

@inject("FrameService")
export class Home {

  constructor(private readonly frameService: DeleteAbleApiService) {}

  created() {
    this.frameService.get().then(success => {
      console.log(success);
    }, failure => {
      console.log(failure);
    });
  }

}