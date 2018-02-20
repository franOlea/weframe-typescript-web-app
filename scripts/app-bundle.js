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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQUFBO1FBY0EsQ0FBQztRQVZDLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFLLFFBQVEsRUFBRSxRQUFRLEVBQWtCLEdBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLE1BQU0sRUFBQztnQkFDdkYsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFPLFFBQVEsRUFBRSxzQkFBc0IsRUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDN0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUVILFVBQUM7SUFBRCxDQWRBLEFBY0MsSUFBQTtJQWRZLGtCQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9ufSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gIFxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcil7XG4gICAgICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7XG4gICAgICAgIGNvbmZpZy5tYXAoW1xuICAgICAgICAgIHsgcm91dGU6IFsnJywgJ2hvbWUnXSwgICAgbW9kdWxlSWQ6ICcuL2hvbWUnLCAgICAgICAgICAgICAgICAgbmF2OiB0cnVlLCAgbmFtZTogJ2hvbWUnfSxcbiAgICAgICAgICB7IHJvdXRlOiAnY2FsbGJhY2snLCAgICAgIG1vZHVsZUlkOiAnLi9hcGkvbG9naW4tY2FsbGJhY2snLCAgIG5hdjogZmFsc2UsIG5hbWU6ICdjYWxsYmFjaycgfVxuICAgICAgICBdKTtcblxuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuICBcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true,
        auth0Domain: 'weframe.auth0.com',
        auth0ClientID: 'T4odJUBxMAikG5P6sEaq7wk5OqdabVYL',
        auth0RedirectUri: 'http://localhost:9000/callback',
        auth0Audience: 'http://localhost:8080',
        auth0ResponseType: 'token id_token',
        auth0Scope: 'roles',
        webApiUrl: "http://localhost:8999",
        tokenStateEvent: "tokenStateEvent",
        authStateEvent: "authStateEvent",
        newAuthStateEvent: "newAuthStateEvent",
        httpServiceTimeout: 10000
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtRQUNiLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsYUFBYSxFQUFFLGtDQUFrQztRQUNqRCxnQkFBZ0IsRUFBRSxnQ0FBZ0M7UUFDbEQsYUFBYSxFQUFFLHVCQUF1QjtRQUN0QyxpQkFBaUIsRUFBRSxnQkFBZ0I7UUFDbkMsVUFBVSxFQUFFLE9BQU87UUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtRQUNsQyxlQUFlLEVBQUUsaUJBQWlCO1FBQ2xDLGNBQWMsRUFBRSxnQkFBZ0I7UUFDaEMsaUJBQWlCLEVBQUUsbUJBQW1CO1FBQ3RDLGtCQUFrQixFQUFFLEtBQUs7S0FDMUIsQ0FBQyIsImZpbGUiOiJlbnZpcm9ubWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVidWc6IHRydWUsXG4gIHRlc3Rpbmc6IHRydWUsXG4gIGF1dGgwRG9tYWluOiAnd2VmcmFtZS5hdXRoMC5jb20nLFxuICBhdXRoMENsaWVudElEOiAnVDRvZEpVQnhNQWlrRzVQNnNFYXE3d2s1T3FkYWJWWUwnLFxuICBhdXRoMFJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2NhbGxiYWNrJyxcbiAgYXV0aDBBdWRpZW5jZTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcsXG4gIGF1dGgwUmVzcG9uc2VUeXBlOiAndG9rZW4gaWRfdG9rZW4nLFxuICBhdXRoMFNjb3BlOiAncm9sZXMnLFxuICB3ZWJBcGlVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4OTk5XCIsXG4gIHRva2VuU3RhdGVFdmVudDogXCJ0b2tlblN0YXRlRXZlbnRcIixcbiAgYXV0aFN0YXRlRXZlbnQ6IFwiYXV0aFN0YXRlRXZlbnRcIixcbiAgbmV3QXV0aFN0YXRlRXZlbnQ6IFwibmV3QXV0aFN0YXRlRXZlbnRcIixcbiAgaHR0cFNlcnZpY2VUaW1lb3V0OiAxMDAwMFxufTtcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home',["require", "exports", "aurelia-framework", "./api/delete-able-api-service"], function (require, exports, aurelia_framework_1, delete_able_api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(frameService) {
            this.frameService = frameService;
        }
        Home.prototype.created = function () {
            this.frameService.get().then(function (success) {
                console.log(success);
            }, function (failure) {
                console.log(failure);
            });
        };
        Home = __decorate([
            aurelia_framework_1.inject("FrameService"),
            __metadata("design:paramtypes", [delete_able_api_service_1.DeleteAbleApiService])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBS0E7UUFFRSxjQUE2QixZQUFrQztZQUFsQyxpQkFBWSxHQUFaLFlBQVksQ0FBc0I7UUFBRyxDQUFDO1FBRW5FLHNCQUFPLEdBQVA7WUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU87Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsQ0FBQyxFQUFFLFVBQUEsT0FBTztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQVZVLElBQUk7WUFEaEIsMEJBQU0sQ0FBQyxjQUFjLENBQUM7NkNBR3NCLDhDQUFvQjtXQUZwRCxJQUFJLENBWWhCO1FBQUQsV0FBQztLQVpELEFBWUMsSUFBQTtJQVpZLG9CQUFJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmltcG9ydCB7IERlbGV0ZUFibGVBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvZGVsZXRlLWFibGUtYXBpLXNlcnZpY2UnO1xuXG5AaW5qZWN0KFwiRnJhbWVTZXJ2aWNlXCIpXG5leHBvcnQgY2xhc3MgSG9tZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmcmFtZVNlcnZpY2U6IERlbGV0ZUFibGVBcGlTZXJ2aWNlKSB7fVxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5mcmFtZVNlcnZpY2UuZ2V0KCkudGhlbihzdWNjZXNzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmFpbHVyZSk7XG4gICAgfSk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "aurelia-http-client", "auth0-js", "./environment", "./api/auth/auth-service", "./api/http/http-service", "./api/user-service", "./api/delete-able-api-service"], function (require, exports, aurelia_http_client_1, auth0_js_1, environment_1, auth_service_1, http_service_1, user_service_1, delete_able_api_service_1) {
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
        var auth0 = getAuth0();
        var httpClient = getHttpClient();
        var httpService = new http_service_1.HttpService(httpClient);
        var authService = new auth_service_1.AuthService(auth0, httpService);
        authService.initialize();
        aurelia.container.registerSingleton(auth_service_1.AuthService, function () {
            return authService;
        });
        aurelia.container.registerSingleton(user_service_1.UserService, function () {
            return new user_service_1.UserService(httpService);
        });
        aurelia.container.registerSingleton("FrameService", function () {
            return new delete_able_api_service_1.DeleteAbleApiService(httpService, "/frames", 5000);
        });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
    function getAuth0() {
        return new auth0_js_1.WebAuth({
            domain: environment_1.default.auth0Domain,
            clientID: environment_1.default.auth0ClientID,
            redirectUri: environment_1.default.auth0RedirectUri,
            audience: environment_1.default.auth0Audience,
            responseType: environment_1.default.auth0ResponseType,
            scope: environment_1.default.auth0Scope
        });
    }
    function getHttpClient() {
        return new aurelia_http_client_1.HttpClient().configure(function (configuration) {
            configuration.withBaseUrl(environment_1.default.webApiUrl);
            configuration.withCredentials(true);
        });
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBWUEsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsbUJBQW1CLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztRQUVyRSxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7UUFDbkMsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELElBQU0sV0FBVyxHQUFHLElBQUksMEJBQVcsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEQsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRXpCLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsMEJBQVcsRUFBRTtZQUMvQyxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQywwQkFBVyxFQUFFO1lBQy9DLE1BQU0sQ0FBQyxJQUFJLDBCQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRTtZQUNsRCxNQUFNLENBQUMsSUFBSSw4Q0FBb0IsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFFaEQsQ0FBQztJQWxDRCw4QkFrQ0M7SUFJRDtRQUNFLE1BQU0sQ0FBQyxJQUFJLGtCQUFPLENBQUM7WUFDakIsTUFBTSxFQUFFLHFCQUFXLENBQUMsV0FBVztZQUMvQixRQUFRLEVBQUUscUJBQVcsQ0FBQyxhQUFhO1lBQ25DLFdBQVcsRUFBRSxxQkFBVyxDQUFDLGdCQUFnQjtZQUN6QyxRQUFRLEVBQUUscUJBQVcsQ0FBQyxhQUFhO1lBQ25DLFlBQVksRUFBRSxxQkFBVyxDQUFDLGlCQUFpQjtZQUMzQyxLQUFLLEVBQUUscUJBQVcsQ0FBQyxVQUFVO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDtRQUNFLE1BQU0sQ0FBQyxJQUFJLGdDQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxhQUFhO1lBQzdDLGFBQWEsQ0FBQyxXQUFXLENBQUMscUJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqRCxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCB7IFdlYkF1dGggfSBmcm9tICdhdXRoMC1qcyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2FwaS9hdXRoL2F1dGgtc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vYXBpL2h0dHAvaHR0cC1zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IERlbGV0ZUFibGVBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvZGVsZXRlLWFibGUtYXBpLXNlcnZpY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZSgncmVzb3VyY2VzJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLWJvb3RzdHJhcCcsIGNvbmZpZyA9PiBjb25maWcub3B0aW9ucy52ZXJzaW9uID0gNCk7XG5cbiAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG4gIH1cblxuICBpZiAoZW52aXJvbm1lbnQudGVzdGluZykge1xuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gIH1cblxuICBjb25zdCBhdXRoMCA9IGdldEF1dGgwKCk7XG4gIGNvbnN0IGh0dHBDbGllbnQgPSBnZXRIdHRwQ2xpZW50KCk7XG4gIGNvbnN0IGh0dHBTZXJ2aWNlID0gbmV3IEh0dHBTZXJ2aWNlKGh0dHBDbGllbnQpO1xuICBjb25zdCBhdXRoU2VydmljZSA9IG5ldyBBdXRoU2VydmljZShhdXRoMCwgaHR0cFNlcnZpY2UpO1xuICBhdXRoU2VydmljZS5pbml0aWFsaXplKCk7XG5cbiAgYXVyZWxpYS5jb250YWluZXIucmVnaXN0ZXJTaW5nbGV0b24oQXV0aFNlcnZpY2UsICgpID0+IHtcbiAgICByZXR1cm4gYXV0aFNlcnZpY2U7XG4gIH0pO1xuXG4gIGF1cmVsaWEuY29udGFpbmVyLnJlZ2lzdGVyU2luZ2xldG9uKFVzZXJTZXJ2aWNlLCAoKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBVc2VyU2VydmljZShodHRwU2VydmljZSk7XG4gIH0pXG5cbiAgYXVyZWxpYS5jb250YWluZXIucmVnaXN0ZXJTaW5nbGV0b24oXCJGcmFtZVNlcnZpY2VcIiwgKCkgPT4ge1xuICAgIHJldHVybiBuZXcgRGVsZXRlQWJsZUFwaVNlcnZpY2UoaHR0cFNlcnZpY2UsIFwiL2ZyYW1lc1wiLCA1MDAwKTtcbiAgfSk7XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xuICBcbn1cblxuXG5cbmZ1bmN0aW9uIGdldEF1dGgwKCk6IFdlYkF1dGgge1xuICByZXR1cm4gbmV3IFdlYkF1dGgoe1xuICAgIGRvbWFpbjogZW52aXJvbm1lbnQuYXV0aDBEb21haW4sXG4gICAgY2xpZW50SUQ6IGVudmlyb25tZW50LmF1dGgwQ2xpZW50SUQsXG4gICAgcmVkaXJlY3RVcmk6IGVudmlyb25tZW50LmF1dGgwUmVkaXJlY3RVcmksXG4gICAgYXVkaWVuY2U6IGVudmlyb25tZW50LmF1dGgwQXVkaWVuY2UsXG4gICAgcmVzcG9uc2VUeXBlOiBlbnZpcm9ubWVudC5hdXRoMFJlc3BvbnNlVHlwZSxcbiAgICBzY29wZTogZW52aXJvbm1lbnQuYXV0aDBTY29wZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SHR0cENsaWVudCgpOiBIdHRwQ2xpZW50IHtcbiAgcmV0dXJuIG5ldyBIdHRwQ2xpZW50KCkuY29uZmlndXJlKGNvbmZpZ3VyYXRpb24gPT4ge1xuICAgIGNvbmZpZ3VyYXRpb24ud2l0aEJhc2VVcmwoZW52aXJvbm1lbnQud2ViQXBpVXJsKTtcbiAgICBjb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyh0cnVlKTtcbiAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('api/api-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApiService = (function () {
        function ApiService(httpService, entityPath, timeout) {
            this.httpService = httpService;
            this.entityPath = entityPath;
            this.timeout = timeout;
        }
        ApiService.prototype.get = function (page, size) {
            var _this = this;
            if (page === void 0) { page = 0; }
            if (size === void 0) { size = 10; }
            var promise = new Promise(function (resolve, reject) {
                _this.httpService.request(_this.entityPath)
                    .asGet()
                    .withTimeout(_this.timeout)
                    .withParams({ page: page, size: size })
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        resolve(_this.mapGetResponse(JSON.parse(success.response)));
                    }
                    else {
                        console.error(success);
                        reject(success);
                    }
                }, function (failure) {
                    console.error(failure);
                    reject(failure);
                });
            });
            return promise;
        };
        ApiService.prototype.getById = function (id) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                _this.httpService.request(_this.entityPath + "/" + id)
                    .asGet()
                    .withTimeout(_this.timeout)
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        resolve(_this.mapGetResponse(JSON.parse(success.response)));
                    }
                    else {
                        console.error(success);
                        reject(success);
                    }
                }, function (failure) {
                    console.error(failure);
                    reject(failure);
                });
            });
        };
        ApiService.prototype.mapGetResponse = function (response) {
            return { page: response.page, body: response._embedded };
        };
        ApiService.prototype.post = function (entity) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                _this.httpService.request("" + _this.entityPath)
                    .asPost()
                    .withTimeout(_this.timeout)
                    .withContent(entity)
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        resolve();
                    }
                    else {
                        console.error(success);
                        reject(success);
                    }
                }, function (failure) {
                    console.error(failure);
                    reject(failure);
                });
            });
            return promise;
        };
        return ApiService;
    }());
    exports.ApiService = ApiService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLFNBQVMsRUFBQyxDQUFDO1FBQ3pELENBQUM7UUFFRCx5QkFBSSxHQUFKLFVBQUssTUFBTTtZQUFYLGlCQW9CQztZQW5CQyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUN4QyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFHLEtBQUksQ0FBQyxVQUFZLENBQUM7cUJBQzNDLE1BQU0sRUFBRTtxQkFDUixXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztxQkFDekIsV0FBVyxDQUFDLE1BQU0sQ0FBQztxQkFDbkIsSUFBSSxFQUFFO3FCQUNOLElBQUksQ0FBQyxVQUFBLE9BQU87b0JBQ1gsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixPQUFPLEVBQUUsQ0FBQztvQkFDWixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEIsQ0FBQztnQkFDSCxDQUFDLEVBQUUsVUFBQSxPQUFPO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUlILGlCQUFDO0lBQUQsQ0E3RUEsQUE2RUMsSUFBQTtJQTdFWSxnQ0FBVSIsImZpbGUiOiJhcGkvYXBpLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwU2VydmljZSB9IGZyb20gJy4vaHR0cC9odHRwLXNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGh0dHBTZXJ2aWNlOiBIdHRwU2VydmljZSwgXG4gICAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlQYXRoOiBzdHJpbmcsIFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgdGltZW91dDogbnVtYmVyKSB7fVxuXG4gIGdldChwYWdlOiBudW1iZXIgPSAwLCBzaXplOiBudW1iZXIgPSAxMCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwU2VydmljZS5yZXF1ZXN0KHRoaXMuZW50aXR5UGF0aClcbiAgICAgICAgLmFzR2V0KClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLndpdGhQYXJhbXMoeyBwYWdlOiBwYWdlLCBzaXplOiBzaXplIH0pXG4gICAgICAgIC5zZW5kKClcbiAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3Muc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5tYXBHZXRSZXNwb25zZShKU09OLnBhcnNlKHN1Y2Nlc3MucmVzcG9uc2UpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3VjY2Vzcyk7XG4gICAgICAgICAgICByZWplY3Qoc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWlsdXJlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZhaWx1cmUpO1xuICAgICAgICAgIHJlamVjdChmYWlsdXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBnZXRCeUlkKGlkOiBudW1iZXIpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cFNlcnZpY2UucmVxdWVzdChgJHt0aGlzLmVudGl0eVBhdGh9LyR7aWR9YClcbiAgICAgICAgLmFzR2V0KClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcy5zdGF0dXNDb2RlID09IDIwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm1hcEdldFJlc3BvbnNlKEpTT04ucGFyc2Uoc3VjY2Vzcy5yZXNwb25zZSkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdWNjZXNzKTtcbiAgICAgICAgICAgIHJlamVjdChzdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZmFpbHVyZSk7XG4gICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICB9KTtcblxuICAgIH0pXG4gIH1cblxuICBtYXBHZXRSZXNwb25zZShyZXNwb25zZTogYW55KToge3BhZ2U6IGFueSwgYm9keTogYW55W119IHtcbiAgICByZXR1cm4ge3BhZ2U6IHJlc3BvbnNlLnBhZ2UsIGJvZHk6IHJlc3BvbnNlLl9lbWJlZGRlZH07XG4gIH1cblxuICBwb3N0KGVudGl0eSkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5odHRwU2VydmljZS5yZXF1ZXN0KGAke3RoaXMuZW50aXR5UGF0aH1gKVxuICAgICAgICAuYXNQb3N0KClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLndpdGhDb250ZW50KGVudGl0eSlcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICBpZihzdWNjZXNzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3VjY2Vzcyk7XG4gICAgICAgICAgICByZWplY3Qoc3VjY2Vzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmYWlsdXJlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGZhaWx1cmUpO1xuICAgICAgICAgIHJlamVjdChmYWlsdXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBcblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('api/delete-able-api-service',["require", "exports", "./api-service"], function (require, exports, api_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DeleteAbleApiService = (function (_super) {
        __extends(DeleteAbleApiService, _super);
        function DeleteAbleApiService(httpService, entityPath, timeout) {
            return _super.call(this, httpService, entityPath, timeout) || this;
        }
        DeleteAbleApiService.prototype.delete = function (id) {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                _this.httpService.request(_this.entityPath + "/" + id)
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
                    console.error(failure);
                    reject(failure);
                });
            });
        };
        return DeleteAbleApiService;
    }(api_service_1.ApiService));
    exports.DeleteAbleApiService = DeleteAbleApiService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9kZWxldGUtYWJsZS1hcGktc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSUE7UUFBMEMsd0NBQVU7UUFFbEQsOEJBQVksV0FBd0IsRUFBRSxVQUFrQixFQUFFLE9BQWU7bUJBQ3ZFLGtCQUFNLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxxQ0FBTSxHQUFOLFVBQU8sRUFBVTtZQUFqQixpQkFrQkM7WUFqQkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUksS0FBSSxDQUFDLFVBQVUsU0FBSSxFQUFJLENBQUM7cUJBQ2pELFFBQVEsRUFBRTtxQkFDVixXQUFXLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQztxQkFDekIsSUFBSSxFQUFFO3FCQUNOLElBQUksQ0FBQyxVQUFBLE9BQU87b0JBQ1gsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixPQUFPLEVBQUUsQ0FBQztvQkFDWixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbEIsQ0FBQztnQkFDSCxDQUFDLEVBQUUsVUFBQSxPQUFPO29CQUNSLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFFSCwyQkFBQztJQUFELENBMUJBLEFBMEJDLENBMUJ5Qyx3QkFBVSxHQTBCbkQ7SUExQlksb0RBQW9CIiwiZmlsZSI6ImFwaS9kZWxldGUtYWJsZS1hcGktc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSAnLi9odHRwL2h0dHAtc2VydmljZSc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgY2xhc3MgRGVsZXRlQWJsZUFwaVNlcnZpY2UgZXh0ZW5kcyBBcGlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihodHRwU2VydmljZTogSHR0cFNlcnZpY2UsIGVudGl0eVBhdGg6IHN0cmluZywgdGltZW91dDogbnVtYmVyKSB7XG4gICAgc3VwZXIoaHR0cFNlcnZpY2UsIGVudGl0eVBhdGgsIHRpbWVvdXQpO1xuICB9XG5cbiAgZGVsZXRlKGlkOiBudW1iZXIpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cFNlcnZpY2UucmVxdWVzdChgJHt0aGlzLmVudGl0eVBhdGh9LyR7aWR9YClcbiAgICAgICAgLmFzRGVsZXRlKClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbihzdWNjZXNzID0+IHtcbiAgICAgICAgICBpZihzdWNjZXNzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChzdWNjZXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZmFpbHVyZSk7XG4gICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICB9KTtcblxuICAgIH0pXG4gIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/login-callback',["require", "exports", "aurelia-framework", "aurelia-router", "./auth/auth-service"], function (require, exports, aurelia_framework_1, aurelia_router_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Callback = (function () {
        function Callback(auth, router) {
            this.auth = auth;
            this.router = router;
        }
        Callback.prototype.created = function () {
            var _this = this;
            console.log("Calling auth handler");
            this.auth.handleAuthentication().then(function () {
                console.log("Redirecting home");
                _this.router.navigate("home");
            });
        };
        Callback = __decorate([
            aurelia_framework_1.inject(auth_service_1.AuthService, aurelia_router_1.Router),
            __metadata("design:paramtypes", [auth_service_1.AuthService, aurelia_router_1.Router])
        ], Callback);
        return Callback;
    }());
    exports.Callback = Callback;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9sb2dpbi1jYWxsYmFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQUVFLGtCQUE2QixJQUFpQixFQUFtQixNQUFjO1lBQWxELFNBQUksR0FBSixJQUFJLENBQWE7WUFBbUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFHLENBQUM7UUFFbkYsMEJBQU8sR0FBUDtZQUFBLGlCQU1DO1lBTEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBVlUsUUFBUTtZQURwQiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsdUJBQU0sQ0FBQzs2Q0FHUywwQkFBVyxFQUEyQix1QkFBTTtXQUZwRSxRQUFRLENBWXBCO1FBQUQsZUFBQztLQVpELEFBWUMsSUFBQTtJQVpZLDRCQUFRIiwiZmlsZSI6ImFwaS9sb2dpbi1jYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGgtc2VydmljZSc7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBDYWxsYmFjayB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBhdXRoOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByZWFkb25seSByb3V0ZXI6IFJvdXRlcikge31cblxuICBjcmVhdGVkKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBhdXRoIGhhbmRsZXJcIik7XG4gICAgdGhpcy5hdXRoLmhhbmRsZUF1dGhlbnRpY2F0aW9uKCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlZGlyZWN0aW5nIGhvbWVcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShcImhvbWVcIilcbiAgICB9KTtcbiAgfVxuICBcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('api/user-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function () {
        function UserService(httpService) {
            this.httpService = httpService;
        }
        UserService.prototype.getCurrentUserData = function () {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                _this.httpService.request("/users/me")
                    .asGet()
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        resolve(JSON.parse(success.response));
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
        UserService.prototype.isAuthenticated = function () {
            return this.httpService.isAuthenticated();
        };
        return UserService;
    }());
    exports.UserService = UserService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS91c2VyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFFSSxxQkFBNkIsV0FBd0I7WUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBRyxDQUFDO1FBRXpELHdDQUFrQixHQUFsQjtZQUFBLGlCQWdCQztZQWZHLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3RDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztxQkFDaEMsS0FBSyxFQUFFO3FCQUNQLElBQUksRUFBRTtxQkFDTixJQUFJLENBQUMsVUFBQSxPQUFPO29CQUNULEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQixDQUFDO2dCQUNMLENBQUMsRUFBRSxVQUFBLE9BQU87b0JBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQixDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRUQscUNBQWUsR0FBZjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlDLENBQUM7UUFFTCxrQkFBQztJQUFELENBMUJBLEFBMEJDLElBQUE7SUExQlksa0NBQVciLCJmaWxlIjoiYXBpL3VzZXItc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBTZXJ2aWNlIH0gZnJvbSBcIi4vaHR0cC9odHRwLXNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlKSB7fVxuXG4gICAgZ2V0Q3VycmVudFVzZXJEYXRhKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5odHRwU2VydmljZS5yZXF1ZXN0KFwiL3VzZXJzL21lXCIpXG4gICAgICAgICAgICAgICAgLmFzR2V0KClcbiAgICAgICAgICAgICAgICAuc2VuZCgpXG4gICAgICAgICAgICAgICAgLnRoZW4oc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHN1Y2Nlc3Muc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShzdWNjZXNzLnJlc3BvbnNlKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCBmYWlsdXJlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwU2VydmljZS5pc0F1dGhlbnRpY2F0ZWQoKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('frame/frame-service',["require", "exports", "aurelia-framework", "../old-api/rest-service", "../old-api/api-delete-able-service"], function (require, exports, aurelia_framework_1, rest_service_1, api_delete_able_service_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyYW1lL2ZyYW1lLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBO1FBQWtDLGdDQUFvQjtRQUVsRCxzQkFBWSxXQUF3QjttQkFDaEMsa0JBQU0sV0FBVyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDdkMsQ0FBQztRQUpRLFlBQVk7WUFEeEIsMEJBQU0sQ0FBQywwQkFBVyxDQUFDOzZDQUdTLDBCQUFXO1dBRjNCLFlBQVksQ0FNeEI7UUFBRCxtQkFBQztLQU5ELEFBTUMsQ0FOaUMsOENBQW9CLEdBTXJEO0lBTlksb0NBQVkiLCJmaWxlIjoiZnJhbWUvZnJhbWUtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vb2xkLWFwaS9yZXN0LXNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpRGVsZXRlQWJsZVNlcnZpY2UgfSBmcm9tICcuLi9vbGQtYXBpL2FwaS1kZWxldGUtYWJsZS1zZXJ2aWNlJztcblxuQGluamVjdChSZXN0U2VydmljZSlcbmV4cG9ydCBjbGFzcyBGcmFtZVNlcnZpY2UgZXh0ZW5kcyBBcGlEZWxldGVBYmxlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihyZXN0U2VydmljZTogUmVzdFNlcnZpY2UpIHtcbiAgICAgICAgc3VwZXIocmVzdFNlcnZpY2UsICcvZnJhbWVzJywgMzAwMCk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==



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
define('nav-bar/nav-bar',["require", "exports", "aurelia-framework", "../api/user-service", "../api/auth/auth-service"], function (require, exports, aurelia_framework_1, user_service_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar(userService, authService) {
            this.userService = userService;
            this.authService = authService;
        }
        NavBar.prototype.created = function () {
            if (this.isAuthenticated()) {
                this.getCurrentUser();
            }
            else {
                this.user = null;
            }
        };
        NavBar.prototype.login = function () {
            this.authService.login();
        };
        NavBar.prototype.logout = function () {
            this.authService.logout();
        };
        NavBar.prototype.isAuthenticated = function () {
            return this.userService.isAuthenticated();
        };
        NavBar.prototype.getCurrentUser = function () {
            var _this = this;
            this.userService.getCurrentUserData().then(function (success) {
                _this.user = success;
            }, function (failure) {
                console.error(failure);
            });
        };
        NavBar = __decorate([
            aurelia_framework_1.inject(user_service_1.UserService, auth_service_1.AuthService),
            __metadata("design:paramtypes", [user_service_1.UserService,
                auth_service_1.AuthService])
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIvbmF2LWJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQUlFLGdCQUE2QixXQUF3QixFQUN4QixXQUF3QjtZQUR4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFHLENBQUM7UUFFekQsd0JBQU8sR0FBUDtZQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDbkIsQ0FBQztRQUNILENBQUM7UUFFRCxzQkFBSyxHQUFMO1lBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQsdUJBQU0sR0FBTjtZQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUVPLGdDQUFlLEdBQXZCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsQ0FBQztRQUVELCtCQUFjLEdBQWQ7WUFBQSxpQkFRQztZQVBDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQ3hDLFVBQUEsT0FBTztnQkFDTCxLQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztZQUN0QixDQUFDLEVBQ0QsVUFBQSxPQUFPO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBbkNVLE1BQU07WUFEbEIsMEJBQU0sQ0FBQywwQkFBVyxFQUFFLDBCQUFXLENBQUM7NkNBS1csMEJBQVc7Z0JBQ1gsMEJBQVc7V0FMMUMsTUFBTSxDQXFDbEI7UUFBRCxhQUFDO0tBckNELEFBcUNDLElBQUE7SUFyQ1ksd0JBQU0iLCJmaWxlIjoibmF2LWJhci9uYXYtYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi9hcGkvdXNlci1zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpL2F1dGgvYXV0aC1zZXJ2aWNlJztcblxuQGluamVjdChVc2VyU2VydmljZSwgQXV0aFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgTmF2QmFyIHtcblxuICBwcml2YXRlIHVzZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIFxuICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge31cblxuICBjcmVhdGVkKCk6IHZvaWQge1xuICAgIGlmKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51c2VyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luKCk7XG4gIH1cblxuICBsb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLmlzQXV0aGVudGljYXRlZCgpO1xuICB9XG5cbiAgZ2V0Q3VycmVudFVzZXIoKTogdm9pZCB7XG4gICAgdGhpcy51c2VyU2VydmljZS5nZXRDdXJyZW50VXNlckRhdGEoKS50aGVuKFxuICAgICAgc3VjY2VzcyA9PiB7XG4gICAgICAgIHRoaXMudXNlciA9IHN1Y2Nlc3M7XG4gICAgICB9LFxuICAgICAgZmFpbHVyZSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZmFpbHVyZSk7XG4gICAgfSk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('old-api/api-delete-able-service',["require", "exports", "./api-service"], function (require, exports, api_service_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC1hcGkvYXBpLWRlbGV0ZS1hYmxlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUlBO1FBQTBDLHdDQUFVO1FBRWxELDhCQUFZLFdBQXdCLEVBQUUsVUFBa0IsRUFBRSxPQUFlO21CQUN2RSxrQkFBTSxXQUFXLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxDQUFDO1FBRUQscUNBQU0sR0FBTixVQUFPLEVBQVU7WUFBakIsaUJBb0JDO1lBbkJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQWlCLElBQUksQ0FBQyxVQUFVLGVBQVUsRUFBSSxDQUFDLENBQUM7WUFDNUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDeEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7cUJBQ3pCLGFBQWEsQ0FBSSxLQUFJLENBQUMsVUFBVSxTQUFJLEVBQUksQ0FBQztxQkFDekMsUUFBUSxFQUFFO3FCQUNWLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDO3FCQUN6QixJQUFJLEVBQUU7cUJBQ04sSUFBSSxDQUFDLFVBQUEsT0FBTztvQkFDWCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLE9BQU8sRUFBRSxDQUFDO29CQUNaLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQixDQUFDO2dCQUNILENBQUMsRUFBRSxVQUFBLE9BQU87b0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDN0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVILDJCQUFDO0lBQUQsQ0E1QkEsQUE0QkMsQ0E1QnlDLHdCQUFVLEdBNEJuRDtJQTVCWSxvREFBb0IiLCJmaWxlIjoib2xkLWFwaS9hcGktZGVsZXRlLWFibGUtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS1zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LXNlcnZpY2UnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uL2Vudmlyb25tZW50JztcblxuZXhwb3J0IGNsYXNzIEFwaURlbGV0ZUFibGVTZXJ2aWNlIGV4dGVuZHMgQXBpU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlLCBlbnRpdHlQYXRoOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcikge1xuICAgIHN1cGVyKHJlc3RTZXJ2aWNlLCBlbnRpdHlQYXRoLCB0aW1lb3V0KTtcbiAgfVxuXG4gIGRlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coYERlbGV0aW5nIGZyb20gJHt0aGlzLmVudGl0eVBhdGh9IGJ5IGlkICR7aWR9YCk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldENsaWVudCgpXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KGAke3RoaXMuZW50aXR5UGF0aH0vJHtpZH1gKVxuICAgICAgICAuYXNEZWxldGUoKVxuICAgICAgICAud2l0aFRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgICAuc2VuZCgpXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIGlmKHN1Y2Nlc3Muc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHN1Y2Nlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFpbHVyZSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9taXNlRmFpbHVyZShmYWlsdXJlKTtcbiAgICAgICAgICByZWplY3QoZmFpbHVyZSk7XG4gICAgICAgIH0pO1xuXG4gICAgfSlcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('old-api/api-service',["require", "exports"], function (require, exports) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxDQUFDO29CQUN4RSxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLE9BQU8sRUFBRSxDQUFDO29CQUNaLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQixDQUFDO2dCQUNILENBQUMsRUFBRSxVQUFBLE9BQU87b0JBQ1IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBZ0JILGlCQUFDO0lBQUQsQ0FqR0EsQUFpR0MsSUFBQTtJQWpHWSxnQ0FBVSIsImZpbGUiOiJvbGQtYXBpL2FwaS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUmVzdFNlcnZpY2UgfSBmcm9tICcuL3Jlc3Qtc2VydmljZSc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZTtcbiAgcHJvdGVjdGVkIGVudGl0eVBhdGg6IHN0cmluZztcbiAgcHJvdGVjdGVkIHRpbWVvdXQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihyZXN0U2VydmljZTogUmVzdFNlcnZpY2UsIGVudGl0eVBhdGg6IHN0cmluZywgdGltZW91dDogbnVtYmVyKSB7XG4gICAgdGhpcy5yZXN0U2VydmljZSA9IHJlc3RTZXJ2aWNlO1xuICAgIHRoaXMuZW50aXR5UGF0aCA9IGVudGl0eVBhdGg7XG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgfVxuXG4gIGdldChwYWdlOiBudW1iZXIsIHNpemU6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKGBSZXRyaWV2aW5nICR7c2l6ZX0gZW50aXRpZXMgZnJvbSAke3RoaXMuZW50aXR5UGF0aH0gcGFnZWApO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXN0U2VydmljZS5nZXRDbGllbnQoKVxuICAgICAgICAuY3JlYXRlUmVxdWVzdCh0aGlzLmVudGl0eVBhdGgpXG4gICAgICAgIC5hc0dldCgpXG4gICAgICAgIC53aXRoVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICAgIC53aXRoUGFyYW1zKHsgcGFnZTogcGFnZSwgc2l6ZTogc2l6ZSB9KVxuICAgICAgICAuc2VuZCgpXG4gICAgICAgIC50aGVuKHRoaXMucHJvbWlzZVN1Y2Nlc3MsIGZhaWx1cmUgPT4ge1xuICAgICAgICAgIHRoaXMucHJvbWlzZUZhaWx1cmUoZmFpbHVyZSk7XG4gICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIGdldEJ5SWQoaWQ6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKGBSZXRyaWV2aW5nIGZyb20gJHt0aGlzLmVudGl0eVBhdGh9IGJ5IGlkICR7aWR9YCk7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc3RTZXJ2aWNlLmdldENsaWVudCgpXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KGAke3RoaXMuZW50aXR5UGF0aH0vJHtpZH1gKVxuICAgICAgICAuYXNHZXQoKVxuICAgICAgICAud2l0aFRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgICAuc2VuZCgpXG4gICAgICAgIC50aGVuKHRoaXMucHJvbWlzZVN1Y2Nlc3MsIGZhaWx1cmUgPT4ge1xuICAgICAgICAgIHRoaXMucHJvbWlzZUZhaWx1cmUoZmFpbHVyZSk7XG4gICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICB9KTtcblxuICAgIH0pXG4gIH1cblxuICBnZXRDb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhgR2V0dGluZyAke3RoaXMuZW50aXR5UGF0aH0gY291bnRgKTtcbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3NlbGYucmVzdFNlcnZpY2UuZ2V0Q2xpZW50KCkuY3JlYXRlUmVxdWVzdChgJHt0aGlzLmVudGl0eVBhdGh9L2NvdW50YClcbiAgICAgICAgLmFzR2V0KClcbiAgICAgICAgLndpdGhUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbih0aGlzLnByb21pc2VTdWNjZXNzLCBmYWlsdXJlID0+IHtcbiAgICAgICAgICB0aGlzLnByb21pc2VGYWlsdXJlKGZhaWx1cmUpO1xuICAgICAgICAgIHJlamVjdChmYWlsdXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBwb3N0KHVzZXIpIHtcbiAgICBjb25zb2xlLmxvZyhgUG9zdGluZyB0byAke3RoaXMuZW50aXR5UGF0aH1gKTtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0Q2xpZW50KCkuY3JlYXRlUmVxdWVzdChgJHt0aGlzLmVudGl0eVBhdGh9YClcbiAgICAgICAgLmFzUG9zdCgpXG4gICAgICAgIC53aXRoVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICAgIC53aXRoQ29udGVudCh1c2VyKVxuICAgICAgICAuc2VuZCgpXG4gICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZW50aXR5UGF0aH0gcmVzcG9uc2Ugc3RhdHVzICR7c3VjY2Vzcy5zdGF0dXNDb2RlfWApO1xuICAgICAgICAgIGlmKHN1Y2Nlc3Muc3RhdHVzQ29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KHN1Y2Nlc3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFpbHVyZSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGZhaWx1cmUpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvbWlzZVN1Y2Nlc3MgPSBmdW5jdGlvbiAoc3VjY2Vzcykge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuZW50aXR5UGF0aH0gcmVzcG9uc2Ugc3RhdHVzICR7c3VjY2Vzcy5zdGF0dXNDb2RlfWApO1xuICAgIGlmIChzdWNjZXNzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzdWNjZXNzLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHByb21pc2VGYWlsdXJlID0gZnVuY3Rpb24gKGZhaWx1cmUpIHtcbiAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmVudGl0eVBhdGh9IHJlc3F1ZXN0IGZhaWxlZGApO1xuICAgIGNvbnNvbGUubG9nKGZhaWx1cmUpO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('old-api/auth-service',["require", "exports", "auth0-js", "aurelia-framework", "aurelia-router", "aurelia-event-aggregator"], function (require, exports, auth0_js_1, aurelia_framework_1, aurelia_router_1, aurelia_event_aggregator_1) {
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
            this.init();
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
                    _this.eventAggregator.publish("environment.tokenStateEvent", {
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
        AuthService.prototype.logout = function () {
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            console.log("Tokens removed.");
            this.router.navigate('home');
            this.eventAggregator.publish("environment.tokenStateEvent", false);
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
        AuthService.prototype.isAuthenticated = function () {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;
        };
        AuthService.prototype.init = function () {
            if (this.isAuthenticated()) {
                var token = this.getToken();
                this.eventAggregator.publish("environment.authStateEvent", {
                    authenticated: true,
                    accessToken: token.accessToken
                });
            }
        };
        AuthService.prototype.setSession = function (authResult) {
            var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
        };
        AuthService = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator])
        ], AuthService);
        return AuthService;
    }());
    exports.AuthService = AuthService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUM7UUFDMUMsQ0FBQztRQUVPLDBCQUFJLEdBQVo7WUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFO29CQUN6RCxhQUFhLEVBQUUsSUFBSTtvQkFDbkIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO2lCQUMvQixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQztRQUVPLGdDQUFVLEdBQWxCLFVBQW1CLFVBQVU7WUFFM0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FDNUIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FDbkQsQ0FBQztZQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3RCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQXRGVSxXQUFXO1lBRHZCLDBCQUFNLENBQUMsdUJBQU0sRUFBRSwwQ0FBZSxDQUFDOzZDQU9WLHVCQUFNLEVBQW1CLDBDQUFlO1dBTmpELFdBQVcsQ0F3RnZCO1FBQUQsa0JBQUM7S0F4RkQsQUF3RkMsSUFBQTtJQXhGWSxrQ0FBVyIsImZpbGUiOiJvbGQtYXBpL2F1dGgtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYkF1dGggfSBmcm9tICdhdXRoMC1qcyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uL2Vudmlyb25tZW50J1xuXG5AaW5qZWN0KFJvdXRlciwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xuICBwcml2YXRlIGF1dGgwOiBXZWJBdXRoO1xuXG4gIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIHRoaXMuYXV0aDAgPSBuZXcgV2ViQXV0aCh7XG4gICAgICBkb21haW46ICd3ZWZyYW1lLmF1dGgwLmNvbScsXG4gICAgICBjbGllbnRJRDogJ1Q0b2RKVUJ4TUFpa0c1UDZzRWFxN3drNU9xZGFiVllMJyxcbiAgICAgIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2NhbGxiYWNrJyxcbiAgICAgIGF1ZGllbmNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOiAnb3BlbmlkJ1xuICAgIH0pO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIFxuICBsb2dpbigpIHtcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uKGF1dGhSZXN1bHQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2luIHN1Y2Nlc3NmdWwgZm9yIHVzZXIgXCIgKyBhdXRoUmVzdWx0LmlkVG9rZW5QYXlsb2FkLnN1Yik7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goXCJlbnZpcm9ubWVudC50b2tlblN0YXRlRXZlbnRcIiwgeyBcbiAgICAgICAgICBhdXRoZW50aWNhdGVkOiB0cnVlLCBcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogYXV0aFJlc3VsdC5hY2Nlc3NfdG9rZW4gXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSgnaG9tZScpO1xuICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICAvLyBDbGVhciBhY2Nlc3MgdG9rZW4gYW5kIElEIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc19hdCcpO1xuICAgIGNvbnNvbGUubG9nKFwiVG9rZW5zIHJlbW92ZWQuXCIpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdob21lJyk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChcImVudmlyb25tZW50LnRva2VuU3RhdGVFdmVudFwiLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRva2VuKCkge1xuICAgIGlmKHRoaXMuaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjY2Vzc1Rva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyksIFxuICAgICAgICBpZFRva2VuOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciB0aGUgY3VycmVudCB0aW1lIGlzIHBhc3QgdGhlXG4gICAgLy8gYWNjZXNzIHRva2VuJ3MgZXhwaXJ5IHRpbWVcbiAgICBsZXQgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlc19hdCcpKTtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPCBleHBpcmVzQXQ7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYodGhpcy5pc0F1dGhlbnRpY2F0ZWQoKSkge1xuICAgICAgdmFyIHRva2VuID0gdGhpcy5nZXRUb2tlbigpO1xuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChcImVudmlyb25tZW50LmF1dGhTdGF0ZUV2ZW50XCIsIHsgXG4gICAgICAgIGF1dGhlbnRpY2F0ZWQ6IHRydWUsIFxuICAgICAgICBhY2Nlc3NUb2tlbjogdG9rZW4uYWNjZXNzVG9rZW5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgLy8gU2V0IHRoZSB0aW1lIHRoYXQgdGhlIGFjY2VzcyB0b2tlbiB3aWxsIGV4cGlyZSBhdFxuICAgIGxldCBleHBpcmVzQXQgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc19hdCcsIGV4cGlyZXNBdCk7XG4gIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('old-api/authentication-aware',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthenticationAware = (function () {
        function AuthenticationAware(eventAggregator) {
        }
        return AuthenticationAware;
    }());
    exports.AuthenticationAware = AuthenticationAware;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC1hcGkvYXV0aGVudGljYXRpb24tYXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0E7UUFJSSw2QkFBWSxlQUFnQztRQUs1QyxDQUFDO1FBSUwsMEJBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJxQixrREFBbUIiLCJmaWxlIjoib2xkLWFwaS9hdXRoZW50aWNhdGlvbi1hd2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aGVudGljYXRpb25Bd2FyZSB7XG5cbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgICAgIC8vIGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoZW52aXJvbm1lbnQudG9rZW5TdGF0ZUV2ZW50LCAoYXV0aENoYW5nZSkgPT4ge1xuICAgICAgICAvLyAgICAgdGhpcy5hdXRoZW50aWNhdGVkID0gYXV0aENoYW5nZS5hdXRoZW50aWNhdGVkO1xuICAgICAgICAvLyAgICAgdGhpcy5hdXRoZW50aWNhdGlvbkNoYW5nZWQoYXV0aENoYW5nZSk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBhdXRoZW50aWNhdGlvbkNoYW5nZWQoYXV0aENoYW5nZSk6IHZvaWQ7XG5cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('old-api/login-callback',["require", "exports", "aurelia-framework", "./auth-service"], function (require, exports, aurelia_framework_1, auth_service_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC1hcGkvbG9naW4tY2FsbGJhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUE7UUFJRSxrQkFBWSxJQUFpQjtZQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQVBVLFFBQVE7WUFEcEIsMEJBQU0sQ0FBQywwQkFBVyxDQUFDOzZDQUtBLDBCQUFXO1dBSmxCLFFBQVEsQ0FTcEI7UUFBRCxlQUFDO0tBVEQsQUFTQyxJQUFBO0lBVFksNEJBQVEiLCJmaWxlIjoib2xkLWFwaS9sb2dpbi1jYWxsYmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXNlcnZpY2UnO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIENhbGxiYWNrIHtcblxuICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlXG5cbiAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICAgIHRoaXMuYXV0aC5oYW5kbGVBdXRoZW50aWNhdGlvbigpO1xuICB9XG4gIFxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
define('old-api/rest-service',["require", "exports", "aurelia-http-client", "aurelia-framework", "aurelia-event-aggregator", "./auth-service", "./authentication-aware", "../environment"], function (require, exports, aurelia_http_client_1, aurelia_framework_1, aurelia_event_aggregator_1, auth_service_1, authentication_aware_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RestService = (function (_super) {
        __extends(RestService, _super);
        function RestService(eventAggregator, authService) {
            var _this = _super.call(this, eventAggregator) || this;
            _this.httpClient = _this.createUnauthenticatedClient();
            _this.authService = authService;
            return _this;
        }
        RestService.prototype.isAuthenticated = function () {
            return this.authenticated;
        };
        RestService.prototype.getClient = function () {
            return this.httpClient;
        };
        RestService.prototype.authenticationChanged = function (authChange) {
            if (authChange.authenticated) {
                console.log("Authenticated, created http client with access token.");
                this.httpClient = this.createAuthenticatedClient(authChange.accessToken);
            }
            else {
                console.log("Logged out, created default http client.");
                this.httpClient = this.createUnauthenticatedClient();
            }
        };
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
        RestService = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, auth_service_1.AuthService),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, auth_service_1.AuthService])
        ], RestService);
        return RestService;
    }(authentication_aware_1.AuthenticationAware));
    exports.RestService = RestService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC1hcGkvcmVzdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUFpQywrQkFBbUI7UUFLaEQscUJBQVksZUFBZ0MsRUFBRSxXQUF3QjtZQUF0RSxZQUNJLGtCQUFNLGVBQWUsQ0FBQyxTQUd6QjtZQUZHLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7WUFDckQsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O1FBQ25DLENBQUM7UUFFRCxxQ0FBZSxHQUFmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUVELCtCQUFTLEdBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBRVMsMkNBQXFCLEdBQS9CLFVBQWdDLFVBQVU7WUFDdEMsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Z0JBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7WUFDekQsQ0FBQztRQUNMLENBQUM7UUFFTyxpREFBMkIsR0FBbkM7WUFDSSxNQUFNLENBQUMsSUFBSSxnQ0FBVSxFQUFFO2lCQUNsQixTQUFTLENBQUMsVUFBQSxhQUFhO2dCQUNwQixhQUFhLENBQUMsV0FBVyxDQUFDLHFCQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU8sK0NBQXlCLEdBQWpDLFVBQWtDLFdBQVc7WUFDekMsTUFBTSxDQUFDLElBQUksZ0NBQVUsRUFBRTtpQkFDbEIsU0FBUyxDQUFDLFVBQUEsYUFBYTtnQkFDcEIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxxQkFBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRCxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxhQUFhLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFVLFdBQWEsQ0FBQyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQTNDUSxXQUFXO1lBRHZCLDBCQUFNLENBQUMsMENBQWUsRUFBRSwwQkFBVyxDQUFDOzZDQU1KLDBDQUFlLEVBQWUsMEJBQVc7V0FMN0QsV0FBVyxDQTRDdkI7UUFBRCxrQkFBQztLQTVDRCxBQTRDQyxDQTVDZ0MsMENBQW1CLEdBNENuRDtJQTVDWSxrQ0FBVyIsImZpbGUiOiJvbGQtYXBpL3Jlc3Qtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC1zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uQXdhcmUgfSBmcm9tICcuL2F1dGhlbnRpY2F0aW9uLWF3YXJlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuLi9lbnZpcm9ubWVudCc7XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yLCBBdXRoU2VydmljZSlcbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSBleHRlbmRzIEF1dGhlbnRpY2F0aW9uQXdhcmUge1xuICAgIFxuICAgIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudDtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgICAgICBzdXBlcihldmVudEFnZ3JlZ2F0b3IpO1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSB0aGlzLmNyZWF0ZVVuYXV0aGVudGljYXRlZENsaWVudCgpO1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XG4gICAgfVxuXG4gICAgaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGVkO1xuICAgIH1cblxuICAgIGdldENsaWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25DaGFuZ2VkKGF1dGhDaGFuZ2UpIHtcbiAgICAgICAgaWYoYXV0aENoYW5nZS5hdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkF1dGhlbnRpY2F0ZWQsIGNyZWF0ZWQgaHR0cCBjbGllbnQgd2l0aCBhY2Nlc3MgdG9rZW4uXCIpO1xuICAgICAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gdGhpcy5jcmVhdGVBdXRoZW50aWNhdGVkQ2xpZW50KGF1dGhDaGFuZ2UuYWNjZXNzVG9rZW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnZWQgb3V0LCBjcmVhdGVkIGRlZmF1bHQgaHR0cCBjbGllbnQuXCIpO1xuICAgICAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gdGhpcy5jcmVhdGVVbmF1dGhlbnRpY2F0ZWRDbGllbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlVW5hdXRoZW50aWNhdGVkQ2xpZW50KCk6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBDbGllbnQoKVxuICAgICAgICAgICAgLmNvbmZpZ3VyZShjb25maWd1cmF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLndpdGhCYXNlVXJsKGVudmlyb25tZW50LndlYkFwaVVybCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQXV0aGVudGljYXRlZENsaWVudChhY2Nlc3NUb2tlbik6IEh0dHBDbGllbnQge1xuICAgICAgICByZXR1cm4gbmV3IEh0dHBDbGllbnQoKVxuICAgICAgICAgICAgLmNvbmZpZ3VyZShjb25maWd1cmF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLndpdGhCYXNlVXJsKGVudmlyb25tZW50LndlYkFwaVVybCk7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbi53aXRoQ3JlZGVudGlhbHModHJ1ZSlcbiAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uLndpdGhIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7YWNjZXNzVG9rZW59YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('api/auth/auth-listener',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcGkvYXV0aC9hdXRoLWxpc3RlbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('api/auth/auth-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthService = (function () {
        function AuthService(auth0, listener) {
            this.auth0 = auth0;
            this.listener = listener;
        }
        AuthService.prototype.login = function () {
            console.log("Loging in.");
            this.auth0.authorize();
        };
        AuthService.prototype.logout = function () {
            console.log("Loging out.");
            this.deleteToken();
            this.listener.onUnauthenticated();
            location.reload(true);
        };
        AuthService.prototype.handleAuthentication = function () {
            var _this = this;
            return new Promise(function (resolve) {
                _this.auth0.parseHash(function (err, authResult) {
                    if (authResult && authResult.accessToken && authResult.idToken) {
                        console.log(authResult);
                        _this.persistToken(authResult);
                        _this.listener.onAuthenticated(authResult.accessToken);
                        console.log("Login successful for user " + authResult.idTokenPayload.sub);
                        resolve();
                    }
                    else if (err) {
                        console.error(err);
                        _this.listener.onUnauthenticated();
                        resolve();
                    }
                    else {
                        console.error("Login unsuccessful with unknown error.");
                        _this.listener.onUnauthenticated();
                        resolve();
                    }
                });
            });
        };
        AuthService.prototype.initialize = function () {
            console.debug("Initializing auth service.");
            if (this.hasExpiredToken()) {
                console.debug("Expired token, calling listener for no authentication.");
                this.listener.onUnauthenticated();
            }
            else {
                console.debug("Valid token present, loading token.");
                var token = this.loadToken();
                console.debug("Token loaded, calling listener for authentication.");
                this.listener.onAuthenticated(token.accessToken);
            }
        };
        AuthService.prototype.persistToken = function (authResult) {
            var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
            console.debug("Token persisted.");
        };
        AuthService.prototype.deleteToken = function () {
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            console.debug("Token deleted.");
        };
        AuthService.prototype.loadToken = function () {
            return {
                accessToken: localStorage.getItem('access_token'),
                idToken: localStorage.getItem('id_token')
            };
        };
        AuthService.prototype.hasExpiredToken = function () {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() > expiresAt;
        };
        return AuthService;
    }());
    exports.AuthService = AuthService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q29udGVudCI6WyJpbXBvcnQgeyBXZWJBdXRoIH0gZnJvbSAnYXV0aDAtanMnO1xuXG5pbXBvcnQgeyBBdXRoTGlzdGVuZXIgfSBmcm9tICcuL2F1dGgtbGlzdGVuZXInO1xuXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgYXV0aDA6IFdlYkF1dGgsXG4gICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXI6IEF1dGhMaXN0ZW5lcikge31cblxuICBsb2dpbigpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2luZyBpbi5cIik7XG4gICAgdGhpcy5hdXRoMC5hdXRob3JpemUoKTtcbiAgfVxuXG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyhcIkxvZ2luZyBvdXQuXCIpO1xuICAgIHRoaXMuZGVsZXRlVG9rZW4oKTtcbiAgICB0aGlzLmxpc3RlbmVyLm9uVW5hdXRoZW50aWNhdGVkKCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmF1dGgwLnBhcnNlSGFzaCgoZXJyLCBhdXRoUmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChhdXRoUmVzdWx0ICYmIGF1dGhSZXN1bHQuYWNjZXNzVG9rZW4gJiYgYXV0aFJlc3VsdC5pZFRva2VuKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYXV0aFJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5wZXJzaXN0VG9rZW4oYXV0aFJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lci5vbkF1dGhlbnRpY2F0ZWQoYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJMb2dpbiBzdWNjZXNzZnVsIGZvciB1c2VyIFwiICsgYXV0aFJlc3VsdC5pZFRva2VuUGF5bG9hZC5zdWIpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lci5vblVuYXV0aGVudGljYXRlZCgpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTG9naW4gdW5zdWNjZXNzZnVsIHdpdGggdW5rbm93biBlcnJvci5cIik7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lci5vblVuYXV0aGVudGljYXRlZCgpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGNvbnNvbGUuZGVidWcoXCJJbml0aWFsaXppbmcgYXV0aCBzZXJ2aWNlLlwiKTtcbiAgICBpZiAodGhpcy5oYXNFeHBpcmVkVG9rZW4oKSkge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIkV4cGlyZWQgdG9rZW4sIGNhbGxpbmcgbGlzdGVuZXIgZm9yIG5vIGF1dGhlbnRpY2F0aW9uLlwiKTtcbiAgICAgIHRoaXMubGlzdGVuZXIub25VbmF1dGhlbnRpY2F0ZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIlZhbGlkIHRva2VuIHByZXNlbnQsIGxvYWRpbmcgdG9rZW4uXCIpO1xuICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLmxvYWRUb2tlbigpO1xuICAgICAgY29uc29sZS5kZWJ1ZyhcIlRva2VuIGxvYWRlZCwgY2FsbGluZyBsaXN0ZW5lciBmb3IgYXV0aGVudGljYXRpb24uXCIpO1xuICAgICAgdGhpcy5saXN0ZW5lci5vbkF1dGhlbnRpY2F0ZWQodG9rZW4uYWNjZXNzVG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcGVyc2lzdFRva2VuKGF1dGhSZXN1bHQpOiB2b2lkIHtcbiAgICBjb25zdCBleHBpcmVzQXQgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgYXV0aFJlc3VsdC5pZFRva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhwaXJlc19hdCcsIGV4cGlyZXNBdCk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiVG9rZW4gcGVyc2lzdGVkLlwiKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZXRlVG9rZW4oKTogdm9pZCB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc190b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpZF90b2tlbicpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdleHBpcmVzX2F0Jyk7XG5cbiAgICBjb25zb2xlLmRlYnVnKFwiVG9rZW4gZGVsZXRlZC5cIik7XG4gIH1cblxuICBwcml2YXRlIGxvYWRUb2tlbigpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBhY2Nlc3NUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc190b2tlbicpLFxuICAgICAgaWRUb2tlbjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJylcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNFeHBpcmVkVG9rZW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZXhwaXJlc0F0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhwaXJlc19hdCcpKTtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgPiBleHBpcmVzQXQ7XG4gIH1cblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('api/http/http-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpService = (function () {
        function HttpService(httpClient) {
            this.httpClient = httpClient;
        }
        HttpService.prototype.request = function (path) {
            var _self = this;
            return this.httpClient.createRequest(path)
                .withInterceptor({
                request: function (request) {
                    if (_self.token != null) {
                        request.headers.add('Authorization', "Bearer " + _self.token);
                    }
                    return request;
                }
            })
                .withInterceptor({
                request: function (request) {
                    console.log(request.method + " " + request.buildFullUrl());
                    return request;
                },
                response: function (response) {
                    console.log(response.requestMessage.method + " " + response.requestMessage.buildFullUrl() + " " + response.statusCode);
                    return response;
                }
            });
        };
        HttpService.prototype.onAuthenticated = function (token) {
            this.token = token;
        };
        HttpService.prototype.onUnauthenticated = function () {
            this.token = null;
        };
        HttpService.prototype.isAuthenticated = function () {
            if (this.token != null) {
                return true;
            }
            else {
                return false;
            }
        };
        return HttpService;
    }());
    exports.HttpService = HttpService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9odHRwL2h0dHAtc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFLQTtRQUlFLHFCQUE2QixVQUFzQjtZQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ25ELENBQUM7UUFFRCw2QkFBTyxHQUFQLFVBQVEsSUFBSTtZQUNWLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2lCQUN2QyxlQUFlLENBQUM7Z0JBQ2YsT0FBTyxZQUFDLE9BQU87b0JBQ2IsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2QixPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsWUFBVSxLQUFLLENBQUMsS0FBTyxDQUFDLENBQUM7b0JBQ2hFLENBQUM7b0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsQ0FBQzthQUNGLENBQUM7aUJBQ0QsZUFBZSxDQUFDO2dCQUNiLE9BQU8sWUFBQyxPQUFPO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUksT0FBTyxDQUFDLE1BQU0sU0FBSSxPQUFPLENBQUMsWUFBWSxFQUFJLENBQUMsQ0FBQztvQkFDM0QsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQkFDakIsQ0FBQztnQkFDRCxRQUFRLFlBQUMsUUFBUTtvQkFDZixPQUFPLENBQUMsR0FBRyxDQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxTQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLFNBQUksUUFBUSxDQUFDLFVBQVksQ0FBQyxDQUFDO29CQUNsSCxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNsQixDQUFDO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELHFDQUFlLEdBQWYsVUFBZ0IsS0FBYTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO1FBQ0QsdUNBQWlCLEdBQWpCO1lBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUVELHFDQUFlLEdBQWY7WUFDRSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQTVDQSxBQTRDQyxJQUFBO0lBNUNZLGtDQUFXIiwiZmlsZSI6ImFwaS9odHRwL2h0dHAtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCB7IFJlcXVlc3RCdWlsZGVyIH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5cbmltcG9ydCB7IEF1dGhMaXN0ZW5lciB9IGZyb20gJy4uL2F1dGgvYXV0aC1saXN0ZW5lcic7XG5cbmV4cG9ydCBjbGFzcyBIdHRwU2VydmljZSBpbXBsZW1lbnRzIEF1dGhMaXN0ZW5lciB7XG5cbiAgcHJpdmF0ZSB0b2tlbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgcmVxdWVzdChwYXRoKTogUmVxdWVzdEJ1aWxkZXIge1xuICAgIHZhciBfc2VsZiA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5jcmVhdGVSZXF1ZXN0KHBhdGgpXG4gICAgICAud2l0aEludGVyY2VwdG9yKHtcbiAgICAgICAgcmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgICAgICAgaWYoX3NlbGYudG9rZW4gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVxdWVzdC5oZWFkZXJzLmFkZCgnQXV0aG9yaXphdGlvbicsIGBCZWFyZXIgJHtfc2VsZi50b2tlbn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAud2l0aEludGVyY2VwdG9yKHtcbiAgICAgICAgICByZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3JlcXVlc3QubWV0aG9kfSAke3JlcXVlc3QuYnVpbGRGdWxsVXJsKCl9YCk7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtyZXNwb25zZS5yZXF1ZXN0TWVzc2FnZS5tZXRob2R9ICR7cmVzcG9uc2UucmVxdWVzdE1lc3NhZ2UuYnVpbGRGdWxsVXJsKCl9ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX1gKTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uQXV0aGVudGljYXRlZCh0b2tlbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy50b2tlbiA9IHRva2VuO1xuICB9XG4gIG9uVW5hdXRoZW50aWNhdGVkKCk6IHZvaWQge1xuICAgIHRoaXMudG9rZW4gPSBudWxsO1xuICB9XG5cbiAgaXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmKHRoaXMudG9rZW4gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
define('old-api/user/user-service',["require", "exports", "aurelia-framework", "aurelia-event-aggregator", "../rest-service", "../authentication-aware"], function (require, exports, aurelia_framework_1, aurelia_event_aggregator_1, rest_service_1, authentication_aware_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function (_super) {
        __extends(UserService, _super);
        function UserService(eventAggregator, restService) {
            var _this = _super.call(this, eventAggregator) || this;
            _this.restService = restService;
            return _this;
        }
        UserService.prototype.getCurrentUserData = function () {
            var _this = this;
            var promise = new Promise(function (resolve, reject) {
                _this.restService.getClient()
                    .createRequest("/users/me")
                    .asGet()
                    .withTimeout(3000)
                    .send()
                    .then(function (success) {
                    resolve(success);
                }, function (failure) {
                    reject(failure);
                });
            });
            return promise;
        };
        UserService.prototype.authenticationChanged = function () {
        };
        UserService = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator, rest_service_1.RestService),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator, rest_service_1.RestService])
        ], UserService);
        return UserService;
    }(authentication_aware_1.AuthenticationAware));
    exports.UserService = UserService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZC1hcGkvdXNlci91c2VyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1BO1FBQWlDLCtCQUFtQjtRQUloRCxxQkFBWSxlQUFnQyxFQUFFLFdBQXdCO1lBQXRFLFlBQ0ksa0JBQU0sZUFBZSxDQUFDLFNBRXpCO1lBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O1FBQ25DLENBQUM7UUFFRCx3Q0FBa0IsR0FBbEI7WUFBQSxpQkFjQztZQWJHLElBQUksT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQ3RDLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO3FCQUN2QixhQUFhLENBQUMsV0FBVyxDQUFDO3FCQUMxQixLQUFLLEVBQUU7cUJBQ1AsV0FBVyxDQUFDLElBQUksQ0FBQztxQkFDakIsSUFBSSxFQUFFO3FCQUNOLElBQUksQ0FBQyxVQUFBLE9BQU87b0JBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEVBQUUsVUFBQSxPQUFPO29CQUNOLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUVTLDJDQUFxQixHQUEvQjtRQUVBLENBQUM7UUEzQlEsV0FBVztZQUR2QiwwQkFBTSxDQUFDLDBDQUFlLEVBQUUsMEJBQVcsQ0FBQzs2Q0FLSiwwQ0FBZSxFQUFlLDBCQUFXO1dBSjdELFdBQVcsQ0E2QnZCO1FBQUQsa0JBQUM7S0E3QkQsQUE2QkMsQ0E3QmdDLDBDQUFtQixHQTZCbkQ7SUE3Qlksa0NBQVciLCJmaWxlIjoib2xkLWFwaS91c2VyL3VzZXItc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBSZXN0U2VydmljZSB9IGZyb20gJy4uL3Jlc3Qtc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkF3YXJlIH0gZnJvbSAnLi4vYXV0aGVudGljYXRpb24tYXdhcmUnO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvciwgUmVzdFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2UgZXh0ZW5kcyBBdXRoZW50aWNhdGlvbkF3YXJlIHtcblxuICAgIHByaXZhdGUgcmVzdFNlcnZpY2U6IFJlc3RTZXJ2aWNlO1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSkge1xuICAgICAgICBzdXBlcihldmVudEFnZ3JlZ2F0b3IpO1xuICAgICAgICB0aGlzLnJlc3RTZXJ2aWNlID0gcmVzdFNlcnZpY2U7XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFVzZXJEYXRhKCkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzdFNlcnZpY2UuZ2V0Q2xpZW50KClcbiAgICAgICAgICAgICAgICAuY3JlYXRlUmVxdWVzdChcIi91c2Vycy9tZVwiKVxuICAgICAgICAgICAgICAgIC5hc0dldCgpXG4gICAgICAgICAgICAgICAgLndpdGhUaW1lb3V0KDMwMDApXG4gICAgICAgICAgICAgICAgLnNlbmQoKVxuICAgICAgICAgICAgICAgIC50aGVuKHN1Y2Nlc3MgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIH0sIGZhaWx1cmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZmFpbHVyZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25DaGFuZ2VkKCkge1xuICAgICAgICBcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><require from=\"./nav-bar/nav-bar\"></require><nav-bar></nav-bar></template>"; });
define('text!api/login-callback.html', ['module'], function(module) { module.exports = "<template><div class=\"spinner\"><h1>Cargando...</h1></div></template>"; });
define('text!frame/frame-gallery.html', ['module'], function(module) { module.exports = "<templace><require from=\"./frame-thumbnail\"></require><div class=\"row\"><div class=\"alert alert-danger\" if.bind=\"error.title && error.description\"><strong>${error.title}</strong> ${error.description} </div></div><div repeat.for=\"row of frameRows\"><div class=\"row\"><div repeat.for=\"column of framesPerRow\"><div class=\"col-md-${12/framesPerRow}\"><frame-thumbnail frame.bind=\"frames[$parent.index * framesPerRow + $index]\"></frame-thumbnail></div></div></div></div></templace>"; });
define('text!frame/frame-thumbnail.html', ['module'], function(module) { module.exports = ""; });
define('text!old-api/login-callback.html', ['module'], function(module) { module.exports = "<template><div class=\"spinner\"><h1>Cargando...</h1></div></template>"; });
define('text!nav-bar/nav-bar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">WeFrame</a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Inicio <span class=\"sr-only\">(current)</span></a></li></ul><ul class=\"nav navbar-nav navbar-right\" if.bind=\"user\"><li><a href=\"#\">${user.name}</a></li><button class=\"btn btn-outline-warning my-2 my-sm-0\" click.delegate=\"logout()\">Salir</button></ul><ul class=\"nav navbar-nav navbar-right\" if.bind=\"!user\"><button class=\"btn btn-outline-success my-2 my-sm-0\" click.delegate=\"login()\">Ingresar</button></ul></div></nav></template>"; });
//# sourceMappingURL=app-bundle.js.map