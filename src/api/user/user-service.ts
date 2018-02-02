import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { RestService } from '../rest-service';
import { AuthenticationAware } from '../authentication-aware';

@inject(EventAggregator, RestService)
export class UserService extends AuthenticationAware {

    private restService: RestService;

    constructor(eventAggregator: EventAggregator, restService: RestService) {
        super(eventAggregator);
        this.restService = restService;
    }

    getCurrentUserData() {
        var promise = new Promise((resolve, reject) => {
            this.restService.getClient()
                .createRequest("/users/me")
                .asGet()
                .withTimeout(3000)
                .send()
                .then(success => {
                    resolve(success);
                }, failure => {
                    reject(failure);
                });
        });
        return promise;
    }

    protected authenticationChanged() {
        
    }

}