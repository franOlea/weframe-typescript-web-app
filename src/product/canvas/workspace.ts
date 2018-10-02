import {inject} from 'aurelia-framework';
import {Frame} from "../frame/frame-service";
import {Error} from "../../error/Error";
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Workspace {

  constructor(private eventAggregator : EventAggregator) {}

  created() {
    this.eventAggregator.subscribe(Frame, frame  => {
      console.log("New frame selected: " + frame.name);
    })
  }

}
