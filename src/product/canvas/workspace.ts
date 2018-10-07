import {inject} from 'aurelia-framework';
import {Frame} from "../frame/frame-service";
import {EventAggregator} from 'aurelia-event-aggregator';
import {Backboard} from "../backboard/backboard-service";
// import * as interact from 'interactjs';


@inject(EventAggregator)
export class Workspace {

  private frame: Frame;
  private backboard: Backboard;

  constructor(private eventAggregator : EventAggregator) {}

  created() {
    let _self = this;
    this.eventAggregator.subscribe(Frame, frame  => {
      console.log("New frame selected: " + frame.name);
      _self.frame = frame;
    });
    this.eventAggregator.subscribe(Backboard, backboard => {
      console.log("New backboard selected: " + backboard.name);
      _self.backboard = backboard;
    })
  }

}
