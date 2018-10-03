define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});



define('product/product',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Product = (function () {
        function Product(id, name, description) {
            this.id = id;
            this.name = name;
            this.description = description;
        }
        return Product;
    }());
    exports.Product = Product;
});



define('product/picture',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Picture = (function () {
        function Picture(name, key, url) {
            if (url === void 0) { url = null; }
            this.name = name;
            this.key = key;
            this.url = url;
        }
        return Picture;
    }());
    exports.Picture = Picture;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
define('product/mat-type/mat-type-service',["require", "exports", "aurelia-framework", "../../api/delete-able-api-service", "../../api/http/http-service", "../product", "../picture"], function (require, exports, aurelia_framework_1, delete_able_api_service_1, http_service_1, product_1, picture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MatTypeService = (function (_super) {
        __extends(MatTypeService, _super);
        function MatTypeService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MatTypeService.prototype.parseOne = function (object) {
            var id = object.id;
            var name = object.name;
            var description = object.description;
            var pictureName = object.picture.name;
            var pictureKey = object.picture.key;
            var picture = new picture_1.Picture(pictureName, pictureKey);
            var m2Price = object.m2Price;
            return new MatType(id, name, description, picture, m2Price);
        };
        MatTypeService.prototype.parseArray = function (array) {
            var _this = this;
            return array._embedded["mat-types"].map(function (object) { return _this.parseOne(object); });
        };
        MatTypeService = __decorate([
            aurelia_framework_1.inject(http_service_1.HttpService)
        ], MatTypeService);
        return MatTypeService;
    }(delete_able_api_service_1.DeleteAbleApiService));
    exports.MatTypeService = MatTypeService;
    var MatType = (function (_super) {
        __extends(MatType, _super);
        function MatType(id, name, description, picture, m2Price) {
            var _this = _super.call(this, id, name, description) || this;
            _this.picture = picture;
            _this.m2Price = m2Price;
            return _this;
        }
        return MatType;
    }(product_1.Product));
    exports.MatType = MatType;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('product/frame/frame-thumbnail',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FrameThumbnail = (function () {
        function FrameThumbnail() {
            this.hasLoaded = false;
        }
        FrameThumbnail.prototype.created = function () {
        };
        FrameThumbnail.prototype.setHasLoaded = function () {
            this.hasLoaded = true;
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], FrameThumbnail.prototype, "frame", void 0);
        return FrameThumbnail;
    }());
    exports.FrameThumbnail = FrameThumbnail;
});



define('text!product/frame/frame-thumbnail.html', ['module'], function(module) { module.exports = "<template><div class=\"thumbnail ${hasLoaded ? 'show' : 'hidden'}\" style=\"border:0 none;box-shadow:none\"><img src=\"${frame.picture.imageUrl}\" load.trigger=\"setHasLoaded()\"><div class=\"caption\"><h3>${frame.name}</h3><p>${frame.description}</p><p>Alto: ${frame.height} cm.</p><p>Ancho: ${frame.length} cm.</p><p><a href=\"#\" class=\"btn btn-primary\" role=\"button\">$ ${frame.price} - Personalizar</a></p></div></div></template>"; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
define('product/frame/frame-service',["require", "exports", "aurelia-framework", "../../api/delete-able-api-service", "../../api/http/http-service", "../product", "../picture"], function (require, exports, aurelia_framework_1, delete_able_api_service_1, http_service_1, product_1, picture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FrameService = (function (_super) {
        __extends(FrameService, _super);
        function FrameService(httpService) {
            return _super.call(this, httpService, '/frames', 3000) || this;
        }
        FrameService.prototype.parseOne = function (object) {
            var id = object.id;
            var name = object.name;
            var description = object.description;
            var height = object.height;
            var length = object.length;
            var pictureName = object.picture.name;
            var pictureKey = object.picture.key;
            var pictureUrl = object.picture.url;
            var picture = new picture_1.Picture(pictureName, pictureKey, pictureUrl);
            var price = object.price;
            return new Frame(id, name, description, height, length, picture, price);
        };
        FrameService.prototype.parseArray = function (array) {
            var _this = this;
            return array._embedded.frames.map(function (object) { return _this.parseOne(object); });
        };
        FrameService = __decorate([
            aurelia_framework_1.inject(http_service_1.HttpService),
            __metadata("design:paramtypes", [http_service_1.HttpService])
        ], FrameService);
        return FrameService;
    }(delete_able_api_service_1.DeleteAbleApiService));
    exports.FrameService = FrameService;
    var Frame = (function (_super) {
        __extends(Frame, _super);
        function Frame(id, name, description, height, length, picture, price) {
            var _this = _super.call(this, id, name, description) || this;
            _this.height = height;
            _this.length = length;
            _this.picture = picture;
            _this.price = price;
            return _this;
        }
        return Frame;
    }(product_1.Product));
    exports.Frame = Frame;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('product/frame/frame-list',["require", "exports", "aurelia-framework", "./frame-service", "../../error/Error"], function (require, exports, aurelia_framework_1, frame_service_1, Error_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FrameList = (function () {
        function FrameList(service) {
            this.service = service;
        }
        FrameList.prototype.created = function () {
            this.updateFrameList();
        };
        FrameList.prototype.updateFrameList = function (page, size) {
            var _this = this;
            if (page === void 0) { page = 0; }
            if (size === void 0) { size = 10; }
            this.working = true;
            this.service.get(page, size).then(function (success) {
                _this.frames = success.entity;
                _this.frames.forEach(function (frame) {
                    console.log(frame);
                }, _this);
                _this.working = false;
            }, function (failure) {
                _this.error = new Error_1.Error('Ups', 'Parece que el sistema no response, por favor intenta nuevamente mas tarde.');
                _this.working = false;
            });
        };
        FrameList = __decorate([
            aurelia_framework_1.inject(frame_service_1.FrameService),
            __metadata("design:paramtypes", [frame_service_1.FrameService])
        ], FrameList);
        return FrameList;
    }());
    exports.FrameList = FrameList;
});



define('text!product/frame/frame-list.html', ['module'], function(module) { module.exports = "<template><div class=\"row\"><div class=\"col-md-8 col-md-offset-2\"><div class=\"alert alert-danger\" if.bind=\"error.description\"><strong>${error.title}</strong> ${error.description} </div></div></div><div class=\"row\"><div class=\"col-md-10 col-md-offset-1\"><table class=\"table table-bordered\" if.bind=\"frames\"><tr><th>ID</th><th>Nombre</th><th>Descripcion</th><th>Alto</th><th>Ancho</th><th>Imagen (ID)</th><th>Precio</th><th>Imagen</th><th>Acciones</th></tr><tr repeat.for=\"frame of frames\"><td>${frame.id}</td><td>${frame.name}</td><td>${frame.description}</td><td>${frame.height}</td><td>${frame.length}</td><td>${frame.picture.imageKey}</td><td>${frame.price}</td><td><a href=\"${frame.picture.url}\"><img src=\"${frame.picture.url}\" alt=\"${frame.name}\" class=\"frame-gallery-thumbnail\"><style>.frame-gallery-thumbnail{display:block;max-width:50%;max-height:25%;width:auto;height:auto}</style></a></td><td><button type=\"button\" class=\"btn btn-danger\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Eliminar</button></td></tr></table></div></div></template>"; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('product/frame/frame-gallery',["require", "exports", "aurelia-framework", "./frame-service"], function (require, exports, aurelia_framework_1, frame_service_1) {
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
                _this.frames = success.entity;
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



define('text!product/frame/frame-gallery.html', ['module'], function(module) { module.exports = "<templace><require from=\"./frame-thumbnail\"></require><div class=\"row\"><div class=\"alert alert-danger\" if.bind=\"error.title && error.description\"><strong>${error.title}</strong> ${error.description} </div></div><div repeat.for=\"row of frameRows\"><div class=\"row\"><div repeat.for=\"column of framesPerRow\"><div class=\"col-md-${12/framesPerRow}\"><frame-thumbnail frame.bind=\"frames[$parent.index * framesPerRow + $index]\"></frame-thumbnail></div></div></div></div></templace>"; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('product/frame/canvas/frame-selector',["require", "exports", "aurelia-framework", "../frame-service", "../../../error/Error", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, frame_service_1, Error_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FrameSelector = (function () {
        function FrameSelector(service, eventAggregator) {
            this.service = service;
            this.eventAggregator = eventAggregator;
        }
        FrameSelector.prototype.created = function () {
            this.updateFrameList();
        };
        FrameSelector.prototype.updateFrameList = function (page, size) {
            var _this = this;
            if (page === void 0) { page = 0; }
            if (size === void 0) { size = 10; }
            this.working = true;
            this.service.get(page, size).then(function (success) {
                _this.frames = success.entity;
                _this.frames.forEach(function (frame) {
                    console.log(frame);
                }, _this);
                _this.working = false;
            }, function (failure) {
                _this.error = new Error_1.Error('Ups', 'Parece que el sistema no response, por favor intenta nuevamente mas tarde.');
                _this.working = false;
            });
        };
        FrameSelector.prototype.select = function (frame) {
            this.eventAggregator.publish(frame);
        };
        FrameSelector = __decorate([
            aurelia_framework_1.inject(frame_service_1.FrameService, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [frame_service_1.FrameService, aurelia_event_aggregator_1.EventAggregator])
        ], FrameSelector);
        return FrameSelector;
    }());
    exports.FrameSelector = FrameSelector;
});



define('text!product/frame/canvas/frame-selector.html', ['module'], function(module) { module.exports = "<template><a href=\"#\" class=\"list-group-item\" repeat.for=\"frame of frames\"><div class=\"row\" click.delegate=\"select(frame)\"><div class=\"col-md-6 vcenter frame-selector-row\"><img src=\"${frame.picture.url}\" alt=\"${frame.name}\" class=\"img-reponsive img-rounded frame-selector-thumbnail vcenter\"></div><div class=\"col-md-6 vcenter\"><h4 class=\"list-group-item-heading\">${frame.name}</h4><p class=\"list-group-item-text\" title=\"${frame.description}\">${frame.description}</p></div></div></a><style>.frame-selector-row{background:#0ff}.frame-selector-thumbnail{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background:#00f}</style></template>"; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('product/canvas/workspace',["require", "exports", "aurelia-framework", "../frame/frame-service", "aurelia-event-aggregator", "interactjs"], function (require, exports, aurelia_framework_1, frame_service_1, aurelia_event_aggregator_1, interact) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Workspace = (function () {
        function Workspace(eventAggregator) {
            this.eventAggregator = eventAggregator;
        }
        Workspace_1 = Workspace;
        Workspace.prototype.created = function () {
            this.eventAggregator.subscribe(frame_service_1.Frame, function (frame) {
                console.log("New frame selected: " + frame.name);
            });
            console.log(interact);
            interact('.draggable')
                .draggable({
                inertia: true,
                restrict: {
                    restriction: "parent",
                    endOnly: true,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                autoScroll: true,
                onmove: Workspace_1.dragMoveListener,
                onend: function (event) {
                    var textEl = event.target.querySelector('p');
                    textEl && (textEl.textContent =
                        'moved a distance of '
                            + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                                Math.pow(event.pageY - event.y0, 2) | 0))
                                .toFixed(2) + 'px');
                }
            });
        };
        Workspace.dragMoveListener = function (event) {
            var target = event.target, x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx, y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.webkitTransform =
                target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        };
        var Workspace_1;
        Workspace = Workspace_1 = __decorate([
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
        ], Workspace);
        return Workspace;
    }());
    exports.Workspace = Workspace;
});



define('text!product/canvas/workspace.html', ['module'], function(module) { module.exports = "<template>Hola<div id=\"drag-1\" class=\"draggable\"><p>You can drag one element</p></div><div id=\"drag-2\" class=\"draggable\"><p>with each pointer</p></div><style>.draggable{width:25%;height:100%;min-height:6.5em;margin:10%;background-color:#29e;color:#fff;border-radius:.75em;padding:4%;-webkit-transform:translate(0,0);transform:translate(0,0)}#drag-1,#drag-2{width:100px;height:100px;background-color:#29e;color:#fff}</style></template>"; });
define('product/canvas/product-selector-accordion',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProductSelectorAccordion = (function () {
        function ProductSelectorAccordion() {
        }
        return ProductSelectorAccordion;
    }());
    exports.ProductSelectorAccordion = ProductSelectorAccordion;
});



define('text!product/canvas/product-selector-accordion.html', ['module'], function(module) { module.exports = "<template><aubs-accordion class=\"product-selector-accordion\"><aubs-accordion-group title=\"Marco\" class=\"accordion-selector\"><require from=\"../frame/canvas/frame-selector\"></require><div class=\"list-group\" as-element=\"frame-selector\"></div></aubs-accordion-group><aubs-accordion-group title=\"Panel\" class=\"accordion-selector\"><require from=\"../backboard/canvas/backboard-selector\"></require><div class=\"list-group\" as-element=\"backboard-selector\"></div></aubs-accordion-group></aubs-accordion><style>.list-group{max-height:400px;overflow:scroll;-webkit-overflow-scrolling:touch}</style></template>"; });
define('product/canvas/canvas',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Canvas = (function () {
        function Canvas() {
        }
        return Canvas;
    }());
    exports.Canvas = Canvas;
});



define('text!product/canvas/canvas.html', ['module'], function(module) { module.exports = "<template><require from=\"./workspace\"></require><require from=\"./product-selector-accordion\"></require><div class=\"col-md-9\" as-element=\"workspace\" style=\"background:#adff2f\"></div><div class=\"col-md-3\" as-element=\"product-selector-accordion\"></div></template>"; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('product/backboard/canvas/backboard-selector',["require", "exports", "aurelia-framework", "../backboard-service", "../../../error/Error"], function (require, exports, aurelia_framework_1, backboard_service_1, Error_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BackboardSelector = (function () {
        function BackboardSelector(service) {
            this.service = service;
        }
        BackboardSelector.prototype.created = function () {
            this.updateBackboardList();
        };
        BackboardSelector.prototype.updateBackboardList = function (page, size) {
            var _this = this;
            if (page === void 0) { page = 0; }
            if (size === void 0) { size = 10; }
            this.working = true;
            this.service.get(page, size).then(function (success) {
                _this.backboards = success.entity;
                _this.backboards.forEach(function (backboard) {
                    console.log(backboard);
                }, _this);
                _this.working = false;
            }, function (failure) {
                _this.error = new Error_1.Error('Ups', 'Parece que el sistema no response, por favor intenta nuevamente mas tarde.');
                _this.working = false;
            });
        };
        BackboardSelector = __decorate([
            aurelia_framework_1.inject(backboard_service_1.BackboardService),
            __metadata("design:paramtypes", [backboard_service_1.BackboardService])
        ], BackboardSelector);
        return BackboardSelector;
    }());
    exports.BackboardSelector = BackboardSelector;
});



define('text!product/backboard/canvas/backboard-selector.html', ['module'], function(module) { module.exports = "<template><a href=\"#\" class=\"list-group-item\" repeat.for=\"backboard of backboards\"><div class=\"row\"><div class=\"col-md-6 vcenter backboard-selector-row\"><img src=\"${backboard.picture.url}\" alt=\"${backboard.name}\" class=\"img-reponsive img-rounded backboard-selector-thumbnail vcenter\"></div><div class=\"col-md-6 vcenter\"><h4 class=\"list-group-item-heading\">${backboard.name}</h4><p class=\"list-group-item-text\" title=\"${backboard.description}\">${backboard.description}</p></div></div></a><style>.backboard-selector-row{background:#0ff}.backboard-selector-thumbnail{max-height:100%;max-width:100%;width:auto;height:auto;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background:#00f}</style></template>"; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
define('product/backboard/backboard-service',["require", "exports", "aurelia-framework", "../../api/delete-able-api-service", "../../api/http/http-service", "../product", "../picture"], function (require, exports, aurelia_framework_1, delete_able_api_service_1, http_service_1, product_1, picture_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BackboardService = (function (_super) {
        __extends(BackboardService, _super);
        function BackboardService(httpService) {
            return _super.call(this, httpService, "/backboards") || this;
        }
        BackboardService.prototype.parseOne = function (object) {
            var id = object.id;
            var name = object.name;
            var description = object.description;
            var pictureName = object.picture.name;
            var pictureKey = object.picture.key;
            var pictureUrl = object.picture.url;
            var picture = new picture_1.Picture(pictureName, pictureKey, pictureUrl);
            var m2Price = object.m2Price;
            return new Backboard(id, name, description, picture, m2Price);
        };
        BackboardService.prototype.parseArray = function (array) {
            var _this = this;
            return array._embedded.backboards.map(function (object) { return _this.parseOne(object); });
        };
        BackboardService = __decorate([
            aurelia_framework_1.inject(http_service_1.HttpService),
            __metadata("design:paramtypes", [http_service_1.HttpService])
        ], BackboardService);
        return BackboardService;
    }(delete_able_api_service_1.DeleteAbleApiService));
    exports.BackboardService = BackboardService;
    var Backboard = (function (_super) {
        __extends(Backboard, _super);
        function Backboard(id, name, description, picture, m2Price) {
            var _this = _super.call(this, id, name, description) || this;
            _this.picture = picture;
            _this.m2Price = m2Price;
            return _this;
        }
        return Backboard;
    }(product_1.Product));
    exports.Backboard = Backboard;
});



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
                this.authenticated = true;
                this.getCurrentUser();
            }
            else {
                this.authenticated = false;
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



define('text!nav-bar/nav-bar.html', ['module'], function(module) { module.exports = "<template><nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">WeFrame</a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Inicio <span class=\"sr-only\">(current)</span></a></li></ul><ul class=\"nav navbar-nav navbar-right\" if.bind=\"authenticated\"><li><a href=\"#\">${user.name}</a></li><button class=\"btn btn-outline-warning my-2 my-sm-0\" click.delegate=\"logout()\">Salir</button></ul><ul class=\"nav navbar-nav navbar-right\" if.bind=\"!authenticated\"><button class=\"btn btn-outline-success my-2 my-sm-0\" click.delegate=\"login()\">Ingresar</button></ul></div></nav></template>"; });
define('main',["require", "exports", "aurelia-http-client", "auth0-js", "./environment", "./api/auth/auth-service", "./api/http/http-service", "./api/user-service", "./product/frame/frame-service"], function (require, exports, aurelia_http_client_1, auth0_js_1, environment_1, auth_service_1, http_service_1, user_service_1, frame_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-bootstrap', function (config) { return config.options.version = 4; })
            .feature('resources');
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
            return new frame_service_1.FrameService(httpService);
        });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
    function getAuth0() {
        return new auth0_js_1.default.WebAuth({
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



define('home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
        }
        Home.prototype.created = function () {
        };
        return Home;
    }());
    exports.Home = Home;
});



define('text!home.html', ['module'], function(module) { module.exports = "<template><require from=\"./product/canvas/canvas\"></require><div class=\"container-fluid\" style=\"height:100%;background:gray\"><div class=\"row h-100\" as-element=\"canvas\" style=\"padding:1%\"></div></div><style>body,html{height:100%}</style></template>"; });
define('error/Error',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Error = (function () {
        function Error(title, message) {
            this.title = title;
            this.message = message;
        }
        return Error;
    }());
    exports.Error = Error;
});



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
        webApiUrl: "http://localhost:8080",
        tokenStateEvent: "tokenStateEvent",
        authStateEvent: "authStateEvent",
        newAuthStateEvent: "newAuthStateEvent",
        httpServiceTimeout: 10000
    };
});



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



define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('api/user-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UserService = (function () {
        function UserService(httpService) {
            this.httpService = httpService;
        }
        UserService.prototype.getCurrentUserData = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
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
        };
        UserService.prototype.isAuthenticated = function () {
            return this.httpService.isAuthenticated();
        };
        return UserService;
    }());
    exports.UserService = UserService;
});



define('api/response/response-entity',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ResponseEntity = (function () {
        function ResponseEntity(entity) {
            this.entity = entity;
        }
        return ResponseEntity;
    }());
    exports.ResponseEntity = ResponseEntity;
    var PagedResponseEntity = (function () {
        function PagedResponseEntity(page, entity) {
            this.page = page;
            this.entity = entity;
        }
        return PagedResponseEntity;
    }());
    exports.PagedResponseEntity = PagedResponseEntity;
    var Page = (function () {
        function Page(size, totalElements, totalPages, pageNumber) {
            this.size = size;
            this.totalElements = totalElements;
            this.totalPages = totalPages;
            this.pageNumber = pageNumber;
        }
        return Page;
    }());
    exports.Page = Page;
});



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



define('text!api/login-callback.html', ['module'], function(module) { module.exports = "<template><div class=\"spinner\"><h1>Cargando...</h1></div></template>"; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('api/http/http-service',["require", "exports", "aurelia-framework", "aurelia-http-client", "../../environment"], function (require, exports, aurelia_framework_1, aurelia_http_client_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpService = (function () {
        function HttpService(httpClient) {
            this.httpClient = httpClient;
            this.httpClient = this.createUnauthenticatedClient();
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
            return this.token != null;
        };
        HttpService.prototype.authenticationChanged = function (authChange) {
            if (authChange.authenticated) {
                console.log("Authenticated, created http client with access token.");
                this.httpClient = this.createAuthenticatedClient(authChange.accessToken);
            }
            else {
                console.log("Logged out, created default http client.");
                this.httpClient = this.createUnauthenticatedClient();
            }
        };
        HttpService.prototype.createUnauthenticatedClient = function () {
            return new aurelia_http_client_1.HttpClient()
                .configure(function (configuration) {
                configuration.withBaseUrl(environment_1.default.webApiUrl);
            });
        };
        HttpService.prototype.createAuthenticatedClient = function (accessToken) {
            return new aurelia_http_client_1.HttpClient()
                .configure(function (configuration) {
                configuration.withBaseUrl(environment_1.default.webApiUrl);
                configuration.withCredentials(true);
                configuration.withHeader('Authorization', "Bearer " + accessToken);
            });
        };
        HttpService = __decorate([
            aurelia_framework_1.inject("HttpClient"),
            __metadata("design:paramtypes", [aurelia_http_client_1.HttpClient])
        ], HttpService);
        return HttpService;
    }());
    exports.HttpService = HttpService;
});



var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
            if (timeout === void 0) { timeout = 3000; }
            return _super.call(this, httpService, entityPath, timeout) || this;
        }
        DeleteAbleApiService.prototype.remove = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
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



define('api/auth/auth-listener',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});



define('api/api-service',["require", "exports", "./response/response-entity"], function (require, exports, response_entity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ApiService = (function () {
        function ApiService(httpService, entityPath, timeout) {
            if (timeout === void 0) { timeout = 3000; }
            this.httpService = httpService;
            this.entityPath = entityPath;
            this.timeout = timeout;
        }
        ApiService.prototype.get = function (page, size) {
            var _this = this;
            if (page === void 0) { page = 0; }
            if (size === void 0) { size = 10; }
            return new Promise(function (resolve, reject) {
                _this.httpService.request(_this.entityPath)
                    .asGet()
                    .withTimeout(_this.timeout)
                    .withParams({ page: page, size: size })
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        var response = JSON.parse(success.response);
                        var entities = _this.parseArray(response);
                        var page_1 = _this.parsePage(response);
                        resolve(new response_entity_1.PagedResponseEntity(page_1, entities));
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
        ApiService.prototype.getById = function (id) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.httpService.request(_this.entityPath + "/" + id)
                    .asGet()
                    .withTimeout(_this.timeout)
                    .send()
                    .then(function (success) {
                    if (success.statusCode == 200) {
                        resolve(_this.parseOne(JSON.parse(success.response)));
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
        ApiService.prototype.post = function (entity) {
            var _this = this;
            return new Promise(function (resolve, reject) {
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
        };
        ApiService.prototype.parsePage = function (response) {
            return new response_entity_1.Page(response.page.size, response.page.totalElements, response.page.totalPages, response.page.number);
        };
        return ApiService;
    }());
    exports.ApiService = ApiService;
});



//# sourceMappingURL=app-bundle.js.map