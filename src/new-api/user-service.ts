import { inject } from 'aurelia-framework';
import { HttpService } from "./http-service";

@inject(HttpService)
export class UserService {

    constructor(private readonly httpService: HttpService) {}

    getCurrentUserData() {
        var promise = new Promise((resolve, reject) => {
            this.httpService.request("/users/me")
                .asGet()
                .send()
                .then(success => {
                    resolve(success);
                }, failure => {
                    reject(failure);
                });
        });
        return promise;
    }

}