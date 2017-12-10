import {Aurelia} from 'aurelia-framework'
import environment from './environment';

import { RestService } from './api/rest-service';
import { ApiDeleteAbleService } from './api/api-delete-able-service';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-bootstrap', config => config.options.version = 4);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
  
}