var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./auth-service"], function (require, exports, aurelia_framework_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(auth) {
            this.auth = auth;
        }
        App.prototype.configureRouter = function (config, router) {
            config.options.pushState = true;
            config.map([
                { route: ['', 'home'], moduleId: './home', nav: true, name: 'home' },
                { route: 'callback', moduleId: './callback', nav: false, name: 'callback' }
            ]);
            this.router = router;
        };
        App = __decorate([
            aurelia_framework_1.inject(auth_service_1.AuthService),
            __metadata("design:paramtypes", [auth_service_1.AuthService])
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFLQTtRQUlFLGFBQVksSUFBaUI7WUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUVELDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFLLFFBQVEsRUFBRSxRQUFRLEVBQU0sR0FBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsTUFBTSxFQUFDO2dCQUMzRSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQU8sUUFBUSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7YUFDakYsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQWhCVSxHQUFHO1lBRGYsMEJBQU0sQ0FBQywwQkFBVyxDQUFDOzZDQUtBLDBCQUFXO1dBSmxCLEdBQUcsQ0FpQmY7UUFBRCxVQUFDO0tBakJELEFBaUJDLElBQUE7SUFqQlksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb259IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLXNlcnZpY2UnO1xuXG5AaW5qZWN0KEF1dGhTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoYXV0aDogQXV0aFNlcnZpY2UpIHtcbiAgICB0aGlzLmF1dGggPSBhdXRoO1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpe1xuICAgICAgICBjb25maWcub3B0aW9ucy5wdXNoU3RhdGUgPSB0cnVlO1xuICAgICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICB7IHJvdXRlOiBbJycsICdob21lJ10sICAgIG1vZHVsZUlkOiAnLi9ob21lJywgICAgIG5hdjogdHJ1ZSwgIG5hbWU6ICdob21lJ30sXG4gICAgICAgICAgeyByb3V0ZTogJ2NhbGxiYWNrJywgICAgICBtb2R1bGVJZDogJy4vY2FsbGJhY2snLCBuYXY6IGZhbHNlLCBuYW1lOiAnY2FsbGJhY2snIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('auth-service',["require", "exports", "auth0-js", "aurelia-framework", "aurelia-router", "aurelia-event-aggregator"], function (require, exports, auth0_js_1, aurelia_framework_1, aurelia_router_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuthService = (function () {
        function AuthService(router, eventAggregator) {
            console.log("auth-service created");
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
                console.log(authResult);
                console.log(err);
                if (authResult && authResult.accessToken && authResult.idToken) {
                    console.log("Handling auth...");
                    _this.setSession(authResult);
                    _this.router.navigate('home');
                    _this.eventAggregator.publish('authChange', { authenticated: true });
                }
                else if (err) {
                    console.log(err);
                }
            });
        };
        AuthService.prototype.setSession = function (authResult) {
            var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
            console.log(authResult);
            console.log(expiresAt);
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
        };
        AuthService.prototype.logout = function () {
            localStorage.removeItem('access_token');
            localStorage.removeItem('id_token');
            localStorage.removeItem('expires_at');
            this.router.navigate('home');
            this.eventAggregator.publish('authChange', false);
        };
        AuthService.prototype.isAuthenticated = function () {
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;
        };
        AuthService = __decorate([
            aurelia_framework_1.inject(aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_router_1.Router, aurelia_event_aggregator_1.EventAggregator])
        ], AuthService);
        return AuthService;
    }());
    exports.AuthService = AuthService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUdFLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQy9ELE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUMxQyxDQUFDO1FBaEVVLFdBQVc7WUFEdkIsMEJBQU0sQ0FBQyx1QkFBTSxFQUFFLDBDQUFlLENBQUM7NkNBTVYsdUJBQU0sRUFBbUIsMENBQWU7V0FMakQsV0FBVyxDQWlFdkI7UUFBRCxrQkFBQztLQWpFRCxBQWlFQyxJQUFBO0lBakVZLGtDQUFXIiwiZmlsZSI6ImF1dGgtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYkF1dGggfSBmcm9tICdhdXRoMC1qcyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuXG5AaW5qZWN0KFJvdXRlciwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcbiAgcHJpdmF0ZSBhdXRoMDogV2ViQXV0aDtcblxuICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImF1dGgtc2VydmljZSBjcmVhdGVkXCIpO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIHRoaXMuYXV0aDAgPSBuZXcgV2ViQXV0aCh7XG4gICAgICBkb21haW46ICd3ZWZyYW1lLmF1dGgwLmNvbScsXG4gICAgICBjbGllbnRJRDogJ1Q0b2RKVUJ4TUFpa0c1UDZzRWFxN3drNU9xZGFiVllMJyxcbiAgICAgIHJlZGlyZWN0VXJpOiAnaHR0cDovL2xvY2FsaG9zdDo5MDAwL2NhbGxiYWNrJyxcbiAgICAgIGF1ZGllbmNlOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyxcbiAgICAgIHJlc3BvbnNlVHlwZTogJ3Rva2VuIGlkX3Rva2VuJyxcbiAgICAgIHNjb3BlOiAnb3BlbmlkJ1xuICAgIH0pO1xuICB9XG4gIFxuICBsb2dpbigpIHtcbiAgICB0aGlzLmF1dGgwLmF1dGhvcml6ZSgpO1xuICB9XG5cbiAgaGFuZGxlQXV0aGVudGljYXRpb24oKSB7XG4gICAgdGhpcy5hdXRoMC5wYXJzZUhhc2goKGVyciwgYXV0aFJlc3VsdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coYXV0aFJlc3VsdCk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgaWYgKGF1dGhSZXN1bHQgJiYgYXV0aFJlc3VsdC5hY2Nlc3NUb2tlbiAmJiBhdXRoUmVzdWx0LmlkVG9rZW4pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyBhdXRoLi4uXCIpO1xuICAgICAgICB0aGlzLnNldFNlc3Npb24oYXV0aFJlc3VsdCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdob21lJyk7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2F1dGhDaGFuZ2UnLCB7IGF1dGhlbnRpY2F0ZWQ6IHRydWUgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0U2Vzc2lvbihhdXRoUmVzdWx0KSB7XG4gICAgLy8gU2V0IHRoZSB0aW1lIHRoYXQgdGhlIGFjY2VzcyB0b2tlbiB3aWxsIGV4cGlyZSBhdFxuICAgIGxldCBleHBpcmVzQXQgPSBKU09OLnN0cmluZ2lmeShcbiAgICAgIGF1dGhSZXN1bHQuZXhwaXJlc0luICogMTAwMCArIG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhhdXRoUmVzdWx0KTtcbiAgICBjb25zb2xlLmxvZyhleHBpcmVzQXQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCBhdXRoUmVzdWx0LmFjY2Vzc1Rva2VuKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBhdXRoUmVzdWx0LmlkVG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdleHBpcmVzX2F0JywgZXhwaXJlc0F0KTtcbiAgfVxuXG4gIGxvZ291dCgpIHtcbiAgICAvLyBDbGVhciBhY2Nlc3MgdG9rZW4gYW5kIElEIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaWRfdG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZXhwaXJlc19hdCcpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCdob21lJyk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnYXV0aENoYW5nZScsIGZhbHNlKTtcbiAgfVxuXG4gIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHRpbWUgaXMgcGFzdCB0aGVcbiAgICAvLyBhY2Nlc3MgdG9rZW4ncyBleHBpcnkgdGltZVxuICAgIGxldCBleHBpcmVzQXQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdleHBpcmVzX2F0JykpO1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSA8IGV4cGlyZXNBdDtcbiAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('callback',["require", "exports", "aurelia-framework", "./auth-service"], function (require, exports, aurelia_framework_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Callback = (function () {
        function Callback(auth) {
            console.log("callback!");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUlBO1FBR0Usa0JBQVksSUFBaUI7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQVBVLFFBQVE7WUFEcEIsMEJBQU0sQ0FBQywwQkFBVyxDQUFDOzZDQUlBLDBCQUFXO1dBSGxCLFFBQVEsQ0FRcEI7UUFBRCxlQUFDO0tBUkQsQUFRQyxJQUFBO0lBUlksNEJBQVEiLCJmaWxlIjoiY2FsbGJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC1zZXJ2aWNlJztcblxuQGluamVjdChBdXRoU2VydmljZSlcbmV4cG9ydCBjbGFzcyBDYWxsYmFjayB7XG4gIHByaXZhdGUgYXV0aDogQXV0aFNlcnZpY2VcblxuICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKFwiY2FsbGJhY2shXCIpO1xuICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgdGhpcy5hdXRoLmhhbmRsZUF1dGhlbnRpY2F0aW9uKCk7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('home',["require", "exports", "aurelia-framework", "./auth-service"], function (require, exports, aurelia_framework_1, auth_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home(auth) {
            this.auth = auth;
        }
        Home = __decorate([
            aurelia_framework_1.inject(auth_service_1.AuthService),
            __metadata("design:paramtypes", [auth_service_1.AuthService])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUE7UUFFSSxjQUFZLElBQWlCO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFKUSxJQUFJO1lBRGhCLDBCQUFNLENBQUMsMEJBQVcsQ0FBQzs2Q0FHRSwwQkFBVztXQUZwQixJQUFJLENBS2hCO1FBQUQsV0FBQztLQUxELEFBS0MsSUFBQTtJQUxZLG9CQUFJIiwiZmlsZSI6ImhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC1zZXJ2aWNlJztcblxuQGluamVjdChBdXRoU2VydmljZSlcbmV4cG9ydCBjbGFzcyBIb21lIHtcbiAgICBwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgfVxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RnJhbWV3b3JrQ29uZmlndXJhdGlvbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbikge1xuICAvL2NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW10pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template><button click.delegate=\"auth.login()\">login</button><div class=\"page-host container\"><router-view></router-view></div></template>"; });
define('text!callback.html', ['module'], function(module) { module.exports = "<template><div class=\"spinner\"><h1>Cargando...</h1></div></template>"; });
define('text!home.html', ['module'], function(module) { module.exports = "<template><div><h4 if.bind=\"authenticated\">You are logged in!</h4><h4 if.bind=\"!authenticated\">You are not logged in! Please <a click.delegate=\"auth.login()\">Log In</a> to continue.</h4></div></template>"; });
//# sourceMappingURL=app-bundle.js.map