import {inject} from 'aurelia-framework';
import {Backboard, BackboardService} from "../backboard-service";
import {Error} from "../../../error/Error";

@inject(BackboardService)
export class BackboardSelector {

  private working : boolean;
  private backboards : Backboard[];
  private error : Error;

  constructor(private service : BackboardService) {
  }

  created() {
    this.updateBackboardList();
  }

  private updateBackboardList(page : number = 0, size : number = 10) : void {
    this.working = true;
    this.service.get(page, size).then(success => {
      this.backboards = success.entity;
      this.backboards.forEach((backboard) => {
        console.log(backboard);
      }, this);
      this.working = false;
    }, failure => {
      this.error = new Error('Ups', 'Parece que el sistema no response, por favor intenta nuevamente mas tarde.');
      this.working = false;
    });
  }

}
