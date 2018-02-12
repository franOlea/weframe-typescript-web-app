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
                    if(success.statusCode == 200) {
                        resolve(JSON.parse(success.response));
                    } else {
                        reject(success);
                    }
                }, failure => {
                    reject(failure);
                });
        });
        return promise;
    }

}