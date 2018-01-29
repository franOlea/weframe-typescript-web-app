define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.options.pushState = true;
            config.map([
                { route: ['', 'home'], moduleId: './home', nav: true, name: 'home' },
                { route: 'callback', moduleId: './api/login-callback', nav: false, name: 'callback' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBY0EsQ0FBQztRQVZDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFLLFFBQVEsRUFBRSxRQUFRLEVBQWtCLEdBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLE1BQU0sRUFBQztnQkFDdkYsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFPLFFBQVEsRUFBRSxzQkFBc0IsRUFBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDNUYsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUVILFVBQUM7SUFBRCxDQWRBLEFBY0MsSUFBQTtJQWRZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gIFxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcil7XG4gICAgICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgIHsgcm91dGU6IFsnJywgJ2hvbWUnXSwgICAgbW9kdWxlSWQ6ICcuL2hvbWUnLCAgICAgICAgICAgICAgICAgbmF2OiB0cnVlLCAgbmFtZTogJ2hvbWUnfSxcbiAgICAgICAgICB7IHJvdXRlOiAnY2FsbGJhY2snLCAgICAgIG1vZHVsZUlkOiAnLi9hcGkvbG9naW4tY2FsbGJhY2snLCAgbmF2OiBmYWxzZSwgbmFtZTogJ2NhbGxiYWNrJyB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG4gIFxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true,
        webApiUrl: "http://localhost:8080",
        authChangeEvent: "authChange"
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtRQUNiLFNBQVMsRUFBRSx1QkFBdUI7UUFDbEMsZUFBZSxFQUFFLFlBQVk7S0FDOUIsQ0FBQyIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVidWc6IHRydWUsXG4gIHRlc3Rpbmc6IHRydWUsXG4gIHdlYkFwaVVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIixcbiAgYXV0aENoYW5nZUV2ZW50OiBcImF1dGhDaGFuZ2VcIlxufTtcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "./api/auth-service", "./api/rest-service"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, auth_service_1, rest_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(auth, eventAggregator, restService) {
            var _this = this;
            this.auth = auth;
            this.eventAggregator = eventAggregator;
            this.restService = restService;
            this.authenticated = auth.isAuthenticated();
            this.eventAggregator.subscribe('authChange', function (authenticated) {
                _this.authenticated = authenticated;
            });
        }
        Home.prototype.test = function () {
            var _this = this;
            console.log("test");
            this.restService.getClient().createRequest("http://localhost:8080/users/me")
                .asGet()
                .withTimeout(3000)
                .send()
                .then(function (success) {
                console.log(success);
                _this.user = success.response;
            }, function (failure) {
                console.log(failure);
            });
        };
        Home = __decorate([
            aurelia_framework_1.inject(auth_service_1.AuthService, aurelia_event_aggregator_1.EventAggregator, rest_service_1.RestService),
            __metadata("design:paramtypes", [auth_service_1.AuthService, aurelia_event_aggregator_1.EventAggregator, rest_service_1.RestService])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFLRSxjQUFvQixJQUFpQixFQUFVLGVBQWdDLEVBQVUsV0FBd0I7WUFBakgsaUJBS0M7WUFMbUIsU0FBSSxHQUFKLElBQUksQ0FBYTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQy9HLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxVQUFDLGFBQWE7Z0JBQ3pELEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUVELG1CQUFJLEdBQUo7WUFBQSxpQkFZQztZQVhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0NBQWdDLENBQUM7aUJBQ3ZFLEtBQUssRUFBRTtpQkFDUCxXQUFXLENBQUMsSUFBSSxDQUFDO2lCQUNqQixJQUFJLEVBQUU7aUJBQ04sSUFBSSxDQUFDLFVBQUEsT0FBTztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDL0IsQ0FBQyxFQUFFLFVBQUEsT0FBTztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQztRQXhCVSxJQUFJO1lBRGhCLDBCQUFNLENBQUMsMEJBQVcsRUFBRSwwQ0FBZSxFQUFFLDBCQUFXLENBQUM7NkNBTXRCLDBCQUFXLEVBQTJCLDBDQUFlLEVBQXVCLDBCQUFXO1dBTHRHLElBQUksQ0EwQmhCO1FBQUQsV0FBQztLQTFCRCxBQTBCQyxJQUFBO0lBMUJZLG9CQUFJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBOZXdJbnN0YW5jZSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXBpL2F1dGgtc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4vYXBpL3Jlc3Qtc2VydmljZSc7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UsIEV2ZW50QWdncmVnYXRvciwgUmVzdFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgSG9tZSB7XG5cbiAgcHJpdmF0ZSBhdXRoZW50aWNhdGVkOiBib29sZWFuO1xuICBwcml2YXRlIHVzZXI6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSkge1xuICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGF1dGguaXNBdXRoZW50aWNhdGVkKCk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdhdXRoQ2hhbmdlJywgKGF1dGhlbnRpY2F0ZWQpID0+IHtcbiAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGF1dGhlbnRpY2F0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICB0ZXN0KCkge1xuICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKTtcbiAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldENsaWVudCgpLmNyZWF0ZVJlcXVlc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlcnMvbWVcIilcbiAgICAgICAgLmFzR2V0KClcbiAgICAgICAgLndpdGhUaW1lb3V0KDMwMDApXG4gICAgICAgIC5zZW5kKClcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coc3VjY2Vzcyk7XG4gICAgICAgICAgdGhpcy51c2VyID0gc3VjY2Vzcy5yZXNwb25zZTtcbiAgICAgICAgfSwgZmFpbHVyZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZmFpbHVyZSk7XG4gICAgICAgIH0pO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-bootstrap', function (config) { return config.options.version = 4; });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsbUJBQW1CLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUVyRSxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFFaEQsQ0FBQztJQWhCRCw4QkFnQkMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvcmVzdC1zZXJ2aWNlJztcbmltcG9ydCB7IEFwaURlbGV0ZUFibGVTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvYXBpLWRlbGV0ZS1hYmxlLXNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLWJvb3RzdHJhcCcsIGNvbmZpZyA9PiBjb25maWcub3B0aW9ucy52ZXJzaW9uID0gNCk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiBhdXJlbGlhLnNldFJvb3QoKSk7XG4gIFxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define('api/api-delete-able-service',["require", "exports", "./api-service"], function (require, exports, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApiDeleteAbleService = (function (_super) {
        __extends(ApiDeleteAbleService, _super);
        function ApiDeleteAbleService(restService, entityPath, timeout) {
            return _super.call(this, restService, entityPath, timeout) || this;
        }
        ApiDeleteAbleService.prototype.delete = function (id) {
            var _this = this;
            console.log("Deleting from " + this.entityPath + " by id " + id);
            var promise = new Promise(function (resolve, reject) {
                _this.restService.getClient()
                    .createRequest(_this.entityPath + "/" + id)
                    .asDelete()
                    .withTimeout(_this.timeout)
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        resolve();
                    }
                    else {
                        reject(success);
                    }
                }, function (failure) {
                    _this.promiseFailure(failure);
                    reject(failure);
                });
            });
        };
        return ApiDeleteAbleService;
    }(api_service_1.ApiService));
    exports.ApiDeleteAbleService = ApiDeleteAbleService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9hcGktZGVsZXRlLWFibGUtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSUE7UUFBMEMsd0NBQVU7UUFFbEQsOEJBQVksV0FBd0IsRUFBRSxVQUFrQixFQUFFLE9BQWU7bUJBQ3ZFLGtCQUFNLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxxQ0FBTSxHQUFOLFVBQU8sRUFBVTtZQUFqQixpQkFvQkM7WUFuQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBaUIsSUFBSSxDQUFDLFVBQVUsZUFBVSxFQUFJLENBQUMsQ0FBQztZQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtxQkFDekIsYUFBYSxDQUFJLEtBQUksQ0FBQyxVQUFVLFNBQUksRUFBSSxDQUFDO3FCQUN6QyxRQUFRLEVBQUU7cUJBQ1YsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUM7cUJBQ3pCLElBQUksRUFBRTtxQkFDTixJQUFJLENBQUMsVUFBQSxPQUFPO29CQUNYLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xCLENBQUM7Z0JBQ0gsQ0FBQyxFQUFFLFVBQUEsT0FBTztvQkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBRUgsMkJBQUM7SUFBRCxDQTVCQSxBQTRCQyxDQTVCeUMsd0JBQVUsR0E0Qm5EO0lBNUJZLG9EQUFvQiIsImZpbGUiOiJhcGkvYXBpLWRlbGV0ZS1hYmxlLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGktc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4vcmVzdC1zZXJ2aWNlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBjbGFzcyBBcGlEZWxldGVBYmxlU2VydmljZSBleHRlbmRzIEFwaVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSwgZW50aXR5UGF0aDogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIpIHtcbiAgICBzdXBlcihyZXN0U2VydmljZSwgZW50aXR5UGF0aCwgdGltZW91dCk7XG4gIH1cblxuICBkZWxldGUoaWQ6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKGBEZWxldGluZyBmcm9tICR7dGhpcy5lbnRpdHlQYXRofSBieSBpZCAke2lkfWApO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXN0U2VydmljZS5nZXRDbGllbnQoKVxuICAgICAgICAuY3JlYXRlUmVxdWVzdChgJHt0aGlzLmVudGl0eVBhdGh9LyR7aWR9YClcbiAgICAgICAgLmFzRGVsZXRlKClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICBpZihzdWNjZXNzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChzdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgICAgIHRoaXMucHJvbWlzZUZhaWx1cmUoZmFpbHVyZSk7XG4gICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICB9KTtcblxuICAgIH0pXG4gIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('api/api-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApiService = (function () {
        function ApiService(restService, entityPath, timeout) {
            this.promiseSuccess = function (success) {
                console.log(this.entityPath + " response status " + success.statusCode);
                if (success.statusCode == 200) {
                    return JSON.parse(success.response);
                }
                else {
                    return null;
                }
            };
            this.promiseFailure = function (failure) {
                console.log(this.entityPath + " resquest failed");
                console.log(failure);
            };
            this.restService = restService;
            this.entityPath = entityPath;
            this.timeout = timeout;
        }
        ApiService.prototype.get = function (page, size) {
            var _this = this;
            console.log("Retrieving " + size + " entities from " + this.entityPath + " page");
            var promise = new Promise(function (resolve, reject) {
                _this.restService.getClient()
                    .createRequest(_this.entityPath)
                    .asGet()
                    .withTimeout(_this.timeout)
                    .withParams({ page: page, size: size })
                    .send()
                    .then(_this.promiseSuccess, function (failure) {
                    _this.promiseFailure(failure);
                    reject(failure);
                });
            });
            return promise;
        };
        ApiService.prototype.getById = function (id) {
            var _this = this;
            console.log("Retrieving from " + this.entityPath + " by id " + id);
            var promise = new Promise(function (resolve, reject) {
                _this.restService.getClient()
                    .createRequest(_this.entityPath + "/" + id)
                    .asGet()
                    .withTimeout(_this.timeout)
                    .send()
                    .then(_this.promiseSuccess, function (failure) {
                    _this.promiseFailure(failure);
                    reject(failure);
                });
            });
        };
        ApiService.prototype.getCount = function () {
            console.log("Getting " + this.entityPath + " count");
            var _self = this;
            var promise = new Promise(function (resolve, reject) {
                var _this = this;
                _self.restService.getClient().createRequest(this.entityPath + "/count")
                    .asGet()
                    .withTimeout(this.timeout)
                    .send()
                    .then(this.promiseSuccess, function (failure) {
                    _this.promiseFailure(failure);
                    reject(failure);
                });
            });
            return promise;
        };
        ApiService.prototype.post = function (user) {
            var _this = this;
            console.log("Posting to " + this.entityPath);
            var promise = new Promise(function (resolve, reject) {
                _this.restService.getClient().createRequest("" + _this.entityPath)
                    .asPost()
                    .withTimeout(_this.timeout)
                    .withContent(user)
                    .send()
                    .then(function (success) {
                    console.log(_this.entityPath + " response status " + success.statusCode);
                    if (success.statusCode == 200) {
                        resolve();
                    }
                    else {
                        reject(success);
                    }
                }, function (failure) {
                    reject(failure);
                });
            });
            return promise;
        };
        return ApiService;
    }());
    exports.ApiService = ApiService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUM7b0JBQ3hFLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDTixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xCLENBQUM7Z0JBQ0gsQ0FBQyxFQUFFLFVBQUEsT0FBTztvQkFDUixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pCLENBQUM7UUFnQkgsaUJBQUM7SUFBRCxDQWpHQSxBQWlHQyxJQUFBO0lBakdZLGdDQUFVIiwiZmlsZSI6ImFwaS9hcGktc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LXNlcnZpY2UnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuXG4gIHByb3RlY3RlZCByZXN0U2VydmljZTogUmVzdFNlcnZpY2U7XG4gIHByb3RlY3RlZCBlbnRpdHlQYXRoOiBzdHJpbmc7XG4gIHByb3RlY3RlZCB0aW1lb3V0OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBlbnRpdHlQYXRoOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHRoaXMucmVzdFNlcnZpY2UgPSByZXN0U2VydmljZTtcbiAgICB0aGlzLmVudGl0eVBhdGggPSBlbnRpdHlQYXRoO1xuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gIH1cblxuICBnZXQocGFnZTogbnVtYmVyLCBzaXplOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhgUmV0cmlldmluZyAke3NpemV9IGVudGl0aWVzIGZyb20gJHt0aGlzLmVudGl0eVBhdGh9IHBhZ2VgKTtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0Q2xpZW50KClcbiAgICAgICAgLmNyZWF0ZVJlcXVlc3QodGhpcy5lbnRpdHlQYXRoKVxuICAgICAgICAuYXNHZXQoKVxuICAgICAgICAud2l0aFRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgICAud2l0aFBhcmFtcyh7IHBhZ2U6IHBhZ2UsIHNpemU6IHNpemUgfSlcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbih0aGlzLnByb21pc2VTdWNjZXNzLCBmYWlsdXJlID0+IHtcbiAgICAgICAgICB0aGlzLnByb21pc2VGYWlsdXJlKGZhaWx1cmUpO1xuICAgICAgICAgIHJlamVjdChmYWlsdXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRCeUlkKGlkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhgUmV0cmlldmluZyBmcm9tICR7dGhpcy5lbnRpdHlQYXRofSBieSBpZCAke2lkfWApO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXN0U2VydmljZS5nZXRDbGllbnQoKVxuICAgICAgICAuY3JlYXRlUmVxdWVzdChgJHt0aGlzLmVudGl0eVBhdGh9LyR7aWR9YClcbiAgICAgICAgLmFzR2V0KClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbih0aGlzLnByb21pc2VTdWNjZXNzLCBmYWlsdXJlID0+IHtcbiAgICAgICAgICB0aGlzLnByb21pc2VGYWlsdXJlKGZhaWx1cmUpO1xuICAgICAgICAgIHJlamVjdChmYWlsdXJlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KVxuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgY29uc29sZS5sb2coYEdldHRpbmcgJHt0aGlzLmVudGl0eVBhdGh9IGNvdW50YCk7XG4gICAgdmFyIF9zZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF9zZWxmLnJlc3RTZXJ2aWNlLmdldENsaWVudCgpLmNyZWF0ZVJlcXVlc3QoYCR7dGhpcy5lbnRpdHlQYXRofS9jb3VudGApXG4gICAgICAgIC5hc0dldCgpXG4gICAgICAgIC53aXRoVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICAgIC5zZW5kKClcbiAgICAgICAgLnRoZW4odGhpcy5wcm9taXNlU3VjY2VzcywgZmFpbHVyZSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9taXNlRmFpbHVyZShmYWlsdXJlKTtcbiAgICAgICAgICByZWplY3QoZmFpbHVyZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgcG9zdCh1c2VyKSB7XG4gICAgY29uc29sZS5sb2coYFBvc3RpbmcgdG8gJHt0aGlzLmVudGl0eVBhdGh9YCk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldENsaWVudCgpLmNyZWF0ZVJlcXVlc3QoYCR7dGhpcy5lbnRpdHlQYXRofWApXG4gICAgICAgIC5hc1Bvc3QoKVxuICAgICAgICAud2l0aFRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgICAud2l0aENvbnRlbnQodXNlcilcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmVudGl0eVBhdGh9IHJlc3BvbnNlIHN0YXR1cyAke3N1Y2Nlc3Muc3RhdHVzQ29kZX1gKTtcbiAgICAgICAgICBpZihzdWNjZXNzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChzdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgICAgIHJlamVjdChmYWlsdXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBwcml2YXRlIHByb21pc2VTdWNjZXNzID0gZnVuY3Rpb24gKHN1Y2Nlc3MpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmVudGl0eVBhdGh9IHJlc3BvbnNlIHN0YXR1cyAke3N1Y2Nlc3Muc3RhdHVzQ29kZX1gKTtcbiAgICBpZiAoc3VjY2Vzcy5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3VjY2Vzcy5yZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBwcm9taXNlRmFpbHVyZSA9IGZ1bmN0aW9uIChmYWlsdXJlKSB7XG4gICAgY29uc29sZS5sb2coYCR7dGhpcy5lbnRpdHlQYXRofSByZXNxdWVzdCBmYWlsZWRgKTtcbiAgICBjb25zb2xlLmxvZyhmYWlsdXJlKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/auth-service',["require", "exports", "auth0-js", "aurelia-framework", "aurelia-router", "aurelia-event-aggregator", "../environment"], function (require, exports, auth0_js_1, aurelia_framework_1, aurelia_router_1, aurelia_event_aggregator_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthService = (function () {
        function AuthService(router, eventAggregator) {
            this.router = router;
            this.eventAggregator = eventAggregator;
            this.auth0 = new auth0_js_1.WebAuth({
                domain: 'weframe.auth0.com',
                clientID: 'T4odJUBxMAikG5P6sEaq7wk5OqdabVYL',
                redirectUri: 'http://localhost:9000/callback',
                audience: 'http://localhost:8080',
                responseType: 'token id_token',
                scope: 'openid'
            });
        }
        AuthService.prototype.login = function () {
            this.auth0.authorize();
        };
        AuthService.prototype.handleAuthentication = function () {
            var _this = this;
            this.auth0.parseHash(function (err, authResult) {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    _this.setSession(authResult);
                    console.log("Login successful for user " + authResult.idTokenPayload.sub);
                    _this.eventAggregator.publish(environment_1.default.authChangeEvent, {
                        authenticated: true,
                        accessToken: authResult.access_token
                    });
                    _this.router.navigate('home');
                }
                else if (err) {
                    console.log(err);
                }
            });
        };
        AuthService.prototype.setSession = function (authResult) {
            var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
        };
        AuthService.prototype.logout = function () {
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            console.log("Tokens removed.");
            this.router.navigate('home');
            this.eventAggregator.publish(environment_1.default.authChangeEvent, false);
        };
        AuthService.prototype.isAuthenticated = function () {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;
        };
        AuthService.prototype.getToken = function () {
            if (this.isAuthenticated()) {
                return {
                    accessToken: localStorage.getItem('access_token'),
                    idToken: localStorage.getItem('id_token')
                };
            }
            else {
                return null;
            }
        };
        AuthService = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator])
        ], AuthService);
        return AuthService;
    }());
    exports.AuthService = AuthService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDO1lBQy9ELE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsOEJBQVEsR0FBUjtZQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQztvQkFDTCxXQUFXLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7b0JBQ2pELE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztpQkFDMUMsQ0FBQztZQUNKLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNILENBQUM7UUEzRVUsV0FBVztZQUR2QiwwQkFBTSxDQUFDLHVCQUFNLEVBQUUsMENBQWUsQ0FBQzs2Q0FPVix1QkFBTSxFQUFtQiwwQ0FBZTtXQU5qRCxXQUFXLENBNEV2QjtRQUFELGtCQUFDO0tBNUVELEFBNEVDLElBQUE7SUE1RVksa0NBQVciLCJmaWxlIjoiYXBpL2F1dGgtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYkF1dGggfSBmcm9tICdhdXRoMC1qcyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uL2Vudmlyb25tZW50J1xuXG5AaW5qZWN0KFJvdXRlciwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xuICBwcml2YXRlIGF1dGgwOiBXZWJBdXRoO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIHRoaXMuYXV0aDAgPSBuZXcgV2ViQXV0aCh7XG4gICAgICBkb21haW46ICd3ZWZyYW1lLmF1dGgwLmNvbScsXG4gICAgICBjbGllbnRJRDogJ1Q0b2RKVUJ4TUFpa0c1UDZzRWFxN3drNU9xZGFiVllMJyxcbiAgICAgIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2NhbGxiYWNrJyxcbiAgICAgIGF1ZGllbmNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOiAnb3BlbmlkJ1xuICAgIH0pO1xuICB9XG4gIFxuICBsb2dpbigpIHtcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWwgZm9yIHVzZXIgXCIgKyBhdXRoUmVzdWx0LmlkVG9rZW5QYXlsb2FkLnN1Yik7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goZW52aXJvbm1lbnQuYXV0aENoYW5nZUV2ZW50LCB7IFxuICAgICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsIFxuICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhdXRoUmVzdWx0LmFjY2Vzc190b2tlbiBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdob21lJyk7XG4gICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgLy8gU2V0IHRoZSB0aW1lIHRoYXQgdGhlIGFjY2VzcyB0b2tlbiB3aWxsIGV4cGlyZSBhdFxuICAgIGxldCBleHBpcmVzQXQgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc19hdCcsIGV4cGlyZXNBdCk7XG4gIH1cblxuICBsb2dvdXQoKSB7XG4gICAgLy8gQ2xlYXIgYWNjZXNzIHRva2VuIGFuZCBJRCB0b2tlbiBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2V4cGlyZXNfYXQnKTtcbiAgICBjb25zb2xlLmxvZyhcIlRva2VucyByZW1vdmVkLlwiKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnaG9tZScpO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goZW52aXJvbm1lbnQuYXV0aENoYW5nZUV2ZW50LCBmYWxzZSk7XG4gIH1cblxuICBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCB0aW1lIGlzIHBhc3QgdGhlXG4gICAgLy8gYWNjZXNzIHRva2VuJ3MgZXhwaXJ5IHRpbWVcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlc19hdCcpKTtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG4gIH1cblxuICBnZXRUb2tlbigpIHtcbiAgICBpZih0aGlzLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY2Nlc3NUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpLCBcbiAgICAgICAgaWRUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJylcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/login-callback',["require", "exports", "aurelia-framework", "./auth-service"], function (require, exports, aurelia_framework_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Callback = (function () {
        function Callback(auth) {
            this.auth = auth;
            this.auth.handleAuthentication();
        }
        Callback = __decorate([
            aurelia_framework_1.inject(auth_service_1.AuthService),
            __metadata("design:paramtypes", [auth_service_1.AuthService])
        ], Callback);
        return Callback;
    }());
    exports.Callback = Callback;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9sb2dpbi1jYWxsYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQTtRQUlFLGtCQUFZLElBQWlCO1lBQzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBUFUsUUFBUTtZQURwQiwwQkFBTSxDQUFDLDBCQUFXLENBQUM7NkNBS0EsMEJBQVc7V0FKbEIsUUFBUSxDQVNwQjtRQUFELGVBQUM7S0FURCxBQVNDLElBQUE7SUFUWSw0QkFBUSIsImZpbGUiOiJhcGkvbG9naW4tY2FsbGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC1zZXJ2aWNlJztcblxuQGluamVjdChBdXRoU2VydmljZSlcbmV4cG9ydCBjbGFzcyBDYWxsYmFjayB7XG5cbiAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZVxuXG4gIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB0aGlzLmF1dGguaGFuZGxlQXV0aGVudGljYXRpb24oKTtcbiAgfVxuICBcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/rest-service',["require", "exports", "aurelia-http-client", "aurelia-framework", "aurelia-event-aggregator", "./auth-service", "../environment"], function (require, exports, aurelia_http_client_1, aurelia_framework_1, aurelia_event_aggregator_1, auth_service_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RestService = (function () {
        function RestService(eventAggregator, authService) {
            var _this = this;
            eventAggregator.subscribe(environment_1.default.authChangeEvent, function (authChange) {
                if (authChange.authenticated) {
                    _this.httpClient = _this.createAuthenticatedClient(authChange.accessToken);
                    console.log("Authenticated, created http client with access token.");
                }
                else {
                    _this.httpClient = _this.createUnauthenticatedClient();
                    console.log("Logged out, created default http client.");
                }
            });
            if (authService.isAuthenticated()) {
                this.httpClient = this.createAuthenticatedClient(authService.getToken().accessToken);
            }
            else {
                this.httpClient = this.createUnauthenticatedClient();
            }
        }
        RestService.prototype.createUnauthenticatedClient = function () {
            return new aurelia_http_client_1.HttpClient()
                .configure(function (configuration) {
                configuration.withBaseUrl(environment_1.default.webApiUrl);
            });
        };
        RestService.prototype.createAuthenticatedClient = function (accessToken) {
            return new aurelia_http_client_1.HttpClient()
                .configure(function (configuration) {
                configuration.withBaseUrl(environment_1.default.webApiUrl);
                configuration.withCredentials(true);
                configuration.withHeader('Authorization', "Bearer " + accessToken);
            });
        };
        RestService.prototype.getClient = function () {
            return this.httpClient;
        };
        RestService = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, auth_service_1.AuthService),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, auth_service_1.AuthService])
        ], RestService);
        return RestService;
    }());
    exports.RestService = RestService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9yZXN0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFJSSxxQkFBWSxlQUFnQyxFQUFFLFdBQXdCO1lBQXRFLGlCQWVDO1lBZEcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxxQkFBVyxDQUFDLGVBQWUsRUFBRSxVQUFBLFVBQVU7Z0JBQ3RFLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztnQkFDekUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO29CQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Z0JBQzVELENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6RixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUN6RCxDQUFDO1FBQ0wsQ0FBQztRQUVPLGlEQUEyQixHQUFuQztZQUNJLE1BQU0sQ0FBQyxJQUFJLGdDQUFVLEVBQUU7aUJBQ2xCLFNBQVMsQ0FBQyxVQUFBLGFBQWE7Z0JBQ3BCLGFBQWEsQ0FBQyxXQUFXLENBQUMscUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFTywrQ0FBeUIsR0FBakMsVUFBa0MsV0FBVztZQUN6QyxNQUFNLENBQUMsSUFBSSxnQ0FBVSxFQUFFO2lCQUNsQixTQUFTLENBQUMsVUFBQSxhQUFhO2dCQUNwQixhQUFhLENBQUMsV0FBVyxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2pELGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ25DLGFBQWEsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLFlBQVUsV0FBYSxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsK0JBQVMsR0FBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUF2Q1EsV0FBVztZQUR2QiwwQkFBTSxDQUFDLDBDQUFlLEVBQUUsMEJBQVcsQ0FBQzs2Q0FLSiwwQ0FBZSxFQUFlLDBCQUFXO1dBSjdELFdBQVcsQ0F3Q3ZCO1FBQUQsa0JBQUM7S0F4Q0QsQUF3Q0MsSUFBQTtJQXhDWSxrQ0FBVyIsImZpbGUiOiJhcGkvcmVzdC1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXNlcnZpY2UnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uL2Vudmlyb25tZW50JztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IsIEF1dGhTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIFJlc3RTZXJ2aWNlIHtcbiAgICBcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoZW52aXJvbm1lbnQuYXV0aENoYW5nZUV2ZW50LCBhdXRoQ2hhbmdlID0+IHtcblx0XHRcdGlmKGF1dGhDaGFuZ2UuYXV0aGVudGljYXRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cENsaWVudCA9IHRoaXMuY3JlYXRlQXV0aGVudGljYXRlZENsaWVudChhdXRoQ2hhbmdlLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0ZWQsIGNyZWF0ZWQgaHR0cCBjbGllbnQgd2l0aCBhY2Nlc3MgdG9rZW4uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSB0aGlzLmNyZWF0ZVVuYXV0aGVudGljYXRlZENsaWVudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTG9nZ2VkIG91dCwgY3JlYXRlZCBkZWZhdWx0IGh0dHAgY2xpZW50LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGF1dGhTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSB0aGlzLmNyZWF0ZUF1dGhlbnRpY2F0ZWRDbGllbnQoYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKS5hY2Nlc3NUb2tlbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSB0aGlzLmNyZWF0ZVVuYXV0aGVudGljYXRlZENsaWVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVVbmF1dGhlbnRpY2F0ZWRDbGllbnQoKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cENsaWVudCgpXG4gICAgICAgICAgICAuY29uZmlndXJlKGNvbmZpZ3VyYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ud2l0aEJhc2VVcmwoZW52aXJvbm1lbnQud2ViQXBpVXJsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBdXRoZW50aWNhdGVkQ2xpZW50KGFjY2Vzc1Rva2VuKTogSHR0cENsaWVudCB7XG4gICAgICAgIHJldHVybiBuZXcgSHR0cENsaWVudCgpXG4gICAgICAgICAgICAuY29uZmlndXJlKGNvbmZpZ3VyYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ud2l0aEJhc2VVcmwoZW52aXJvbm1lbnQud2ViQXBpVXJsKTtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyh0cnVlKVxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24ud2l0aEhlYWRlcignQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0Q2xpZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwQ2xpZW50O1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('frame/frame-gallery',["require", "exports", "aurelia-framework", "./frame-service"], function (require, exports, aurelia_framework_1, frame_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FrameGallery = (function () {
        function FrameGallery(frameService) {
            this.frameService = frameService;
            this.rowSize = 6;
            this.frames = [];
            this.error = { title: null, description: null };
            this.working = false;
        }
        FrameGallery.prototype.created = function () {
            this.retrieveFrames();
        };
        FrameGallery.prototype.retrieveFrames = function (page, size) {
            var _this = this;
            if (page === void 0) { page = 1; }
            if (size === void 0) { size = 10; }
            this.working = true;
            this.frameService.get(page, size).then(function (success) {
                _this.frames = success;
                var frameRows = Math.ceil(_this.frames.length / _this.rowSize);
                _this.frames.forEach(function (frame) {
                    console.log(frame);
                }, _this);
                _this.working = false;
            }, function (failure) {
                _this.error.title = 'Ups';
                _this.error.description = 'Parece que el sistema no response, por favor intenta nuevamente mas tarde.';
                _this.working = false;
            });
        };
        FrameGallery = __decorate([
            aurelia_framework_1.inject(frame_service_1.FrameService),
            __metadata("design:paramtypes", [frame_service_1.FrameService])
        ], FrameGallery);
        return FrameGallery;
    }());
    exports.FrameGallery = FrameGallery;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lL2ZyYW1lLWdhbGxlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUE7UUFPRSxzQkFBb0IsWUFBMEI7WUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7WUFMdEMsWUFBTyxHQUFHLENBQUMsQ0FBQztZQUNaLFdBQU0sR0FBRyxFQUFFLENBQUM7WUFDWixVQUFLLEdBQUcsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUN6QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXlCLENBQUM7UUFFbEQsOEJBQU8sR0FBUDtZQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixDQUFDO1FBRUQscUNBQWMsR0FBZCxVQUFlLElBQWdCLEVBQUUsSUFBaUI7WUFBbEQsaUJBY0M7WUFkYyxxQkFBQSxFQUFBLFFBQWdCO1lBQUUscUJBQUEsRUFBQSxTQUFpQjtZQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTztnQkFDNUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxPQUFlLENBQUM7Z0JBQzlCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3RCxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7b0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsRUFBRSxLQUFJLENBQUMsQ0FBQztnQkFDVCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLEVBQUUsVUFBQSxPQUFPO2dCQUNOLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsNEVBQTRFLENBQUM7Z0JBQ3RHLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQTNCVSxZQUFZO1lBRHhCLDBCQUFNLENBQUMsNEJBQVksQ0FBQzs2Q0FRZSw0QkFBWTtXQVBuQyxZQUFZLENBNkJ4QjtRQUFELG1CQUFDO0tBN0JELEFBNkJDLElBQUE7SUE3Qlksb0NBQVkiLCJmaWxlIjoiZnJhbWUvZnJhbWUtZ2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEZyYW1lU2VydmljZSB9IGZyb20gJy4vZnJhbWUtc2VydmljZSc7XG5cbkBpbmplY3QoRnJhbWVTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEZyYW1lR2FsbGVyeSB7XG5cbiAgcHJpdmF0ZSByb3dTaXplID0gNjtcbiAgcHJpdmF0ZSBmcmFtZXMgPSBbXTtcbiAgcHJpdmF0ZSBlcnJvciA9IHt0aXRsZTogbnVsbCwgZGVzY3JpcHRpb246IG51bGx9O1xuICBwcml2YXRlIHdvcmtpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZyYW1lU2VydmljZTogRnJhbWVTZXJ2aWNlKSB7fVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5yZXRyaWV2ZUZyYW1lcygpO1xuICB9XG5cbiAgcmV0cmlldmVGcmFtZXMocGFnZTogbnVtYmVyID0gMSwgc2l6ZTogbnVtYmVyID0gMTApIHtcbiAgICB0aGlzLndvcmtpbmcgPSB0cnVlO1xuICAgIHRoaXMuZnJhbWVTZXJ2aWNlLmdldChwYWdlLCBzaXplKS50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgdGhpcy5mcmFtZXMgPSBzdWNjZXNzIGFzIHt9W107XG4gICAgICB2YXIgZnJhbWVSb3dzID0gTWF0aC5jZWlsKHRoaXMuZnJhbWVzLmxlbmd0aCAvIHRoaXMucm93U2l6ZSk7XG4gICAgICB0aGlzLmZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhmcmFtZSk7XG4gICAgICB9LCB0aGlzKTtcbiAgICAgIHRoaXMud29ya2luZyA9IGZhbHNlO1xuICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgICB0aGlzLmVycm9yLnRpdGxlID0gJ1Vwcyc7XG4gICAgICAgIHRoaXMuZXJyb3IuZGVzY3JpcHRpb24gPSAnUGFyZWNlIHF1ZSBlbCBzaXN0ZW1hIG5vIHJlc3BvbnNlLCBwb3IgZmF2b3IgaW50ZW50YSBudWV2YW1lbnRlIG1hcyB0YXJkZS4nO1xuICAgICAgICB0aGlzLndvcmtpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('frame/frame-service',["require", "exports", "aurelia-framework", "../api/rest-service", "../api/api-delete-able-service"], function (require, exports, aurelia_framework_1, rest_service_1, api_delete_able_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FrameService = (function (_super) {
        __extends(FrameService, _super);
        function FrameService(restService) {
            return _super.call(this, restService, '/frames', 3000) || this;
        }
        FrameService = __decorate([
            aurelia_framework_1.inject(rest_service_1.RestService),
            __metadata("design:paramtypes", [rest_service_1.RestService])
        ], FrameService);
        return FrameService;
    }(api_delete_able_service_1.ApiDeleteAbleService));
    exports.FrameService = FrameService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lL2ZyYW1lLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBO1FBQWtDLGdDQUFvQjtRQUVsRCxzQkFBWSxXQUF3QjttQkFDaEMsa0JBQU0sV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDdkMsQ0FBQztRQUpRLFlBQVk7WUFEeEIsMEJBQU0sQ0FBQywwQkFBVyxDQUFDOzZDQUdTLDBCQUFXO1dBRjNCLFlBQVksQ0FNeEI7UUFBRCxtQkFBQztLQU5ELEFBTUMsQ0FOaUMsOENBQW9CLEdBTXJEO0lBTlksb0NBQVkiLCJmaWxlIjoiZnJhbWUvZnJhbWUtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL3Jlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBBcGlEZWxldGVBYmxlU2VydmljZSB9IGZyb20gJy4uL2FwaS9hcGktZGVsZXRlLWFibGUtc2VydmljZSc7XG5cbkBpbmplY3QoUmVzdFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgRnJhbWVTZXJ2aWNlIGV4dGVuZHMgQXBpRGVsZXRlQWJsZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKHJlc3RTZXJ2aWNlLCAnL2ZyYW1lcycsIDMwMDApO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmcmFtZS9mcmFtZS10aHVtYm5haWwuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define("frame/frame-thumbnail", [],function(){});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('nav-bar/nav-bar',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../api/auth-service"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar(auth, eventAggregator) {
            var _this = this;
            this.auth = auth;
            this.eventAggregator = eventAggregator;
            this.authenticated = auth.isAuthenticated();
            this.eventAggregator.subscribe('authChange', function (authenticated) {
                _this.authenticated = authenticated;
            });
        }
        NavBar = __decorate([
            aurelia_framework_1.inject(auth_service_1.AuthService, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [auth_service_1.AuthService, aurelia_event_aggregator_1.EventAggregator])
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIvbmF2LWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQU1FLGdCQUFZLElBQWlCLEVBQUUsZUFBZ0M7WUFBL0QsaUJBT0M7WUFOQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBQyxhQUFhO2dCQUN6RCxLQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFiVSxNQUFNO1lBRGxCLDBCQUFNLENBQUMsMEJBQVcsRUFBRSwwQ0FBZSxDQUFDOzZDQU9qQiwwQkFBVyxFQUFtQiwwQ0FBZTtXQU5wRCxNQUFNLENBZWxCO1FBQUQsYUFBQztLQWZELEFBZUMsSUFBQTtJQWZZLHdCQUFNIiwiZmlsZSI6Im5hdi1iYXIvbmF2LWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2FwaS9hdXRoLXNlcnZpY2UnO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlLCBFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgTmF2QmFyIHtcblxuICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xuICBwcml2YXRlIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UsIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcbiAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBhdXRoLmlzQXV0aGVudGljYXRlZCgpO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnYXV0aENoYW5nZScsIChhdXRoZW50aWNhdGVkKSA9PiB7XG4gICAgICB0aGlzLmF1dGhlbnRpY2F0ZWQgPSBhdXRoZW50aWNhdGVkO1xuICAgIH0pO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./nav-bar/nav-bar\"></require><nav-bar></nav-bar><router-view></router-view></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><h1>Home</h1><button if.bind=\"!authenticated\" class=\"btn btn-primary\" click.delegate=\"auth.login()\">Ingresar</button> <button if.bind=\"authenticated\" class=\"btn btn-secondary\" click.delegate=\"auth.logout()\">Salir</button> <button class=\"btn btn-success\" if.bind=\"authenticated\" click.delegate=\"test()\">Test</button><p>${user}</p></template>"; });
define('text!api/login-callback.html', ['module'], function(module) { module.exports = "<template><div class=\"spinner\"><h1>Cargando...</h1></div></template>"; });
define('text!frame/frame-gallery.html', ['module'], function(module) { module.exports = "<templace><require from=\"./frame-thumbnail\"></require><div class=\"row\"><div class=\"alert alert-danger\" if.bind=\"error.title && error.description\"><strong>${error.title}</strong> ${error.description} </div></div><div repeat.for=\"row of frameRows\"><div class=\"row\"><div repeat.for=\"column of framesPerRow\"><div class=\"col-md-${12/framesPerRow}\"><frame-thumbnail frame.bind=\"frames[$parent.index * framesPerRow + $index]\"></frame-thumbnail></div></div></div></div></templace>"; });
define('text!frame/frame-thumbnail.html', ['module'], function(module) { module.exports = ""; });
define('text!nav-bar/nav-bar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">Navbar</a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"#\">Link</a></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Disabled</a></li></ul><button class=\"btn btn-outline-success my-2 my-sm-0\" if.bind=\"!authenticated\" click.delegate=\"auth.login()\">Ingresar</button> <button class=\"btn btn-outline-warning my-2 my-sm-0\" if.bind=\"authenticated\" click.delegate=\"auth.logout()\">Salir</button></div></nav></template>"; });
//# sourceMappingURL=app-bundle.js.map