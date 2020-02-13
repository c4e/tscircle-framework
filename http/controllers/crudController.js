"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crudSchema_1 = require("../../schemas/crudSchema");
var baseController_1 = require("./baseController");
var middy = require("middy");
var _ = require("lodash");
var middlewares_1 = require("middy/src/middlewares");
var createError = require("http-errors");
var CrudController = /** @class */ (function (_super) {
    tslib_1.__extends(CrudController, _super);
    function CrudController(essence) {
        var _this = _super.call(this) || this;
        _this.index = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var parentId, searchQuery, searchColumn, response, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.prerequisites(this.event)];
                    case 1:
                        _a.sent();
                        parentId = _.get(this.event, 'pathParameters.parentId');
                        searchQuery = _.get(this.event, 'queryStringParameters.searchQuery');
                        searchColumn = _.get(this.event, 'queryStringParameters.searchColumn');
                        return [4 /*yield*/, this.essence.getAll(searchQuery, searchColumn, parentId, this.event)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse(200, response)];
                    case 3:
                        error_1 = _a.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.show = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var parentId, id, response, error_2;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.prerequisites(this.event)];
                    case 1:
                        _a.sent();
                        parentId = _.get(this.event, 'pathParameters.parentId');
                        id = _.get(this.event, 'pathParameters.id');
                        this.validate({ id: id }, crudSchema_1.idSchema);
                        return [4 /*yield*/, this.essence.get(parseInt(id), parseInt(parentId), this.event)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse(200, response)];
                    case 3:
                        error_2 = _a.sent();
                        this.handleError(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.store = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var body, parentId, response, error_3;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.prerequisites(this.event)];
                    case 1:
                        _a.sent();
                        body = this.event.body;
                        this.validate(body, this.onStoreValidationSchema);
                        parentId = _.get(this.event, 'pathParameters.parentId');
                        return [4 /*yield*/, this.essence.add(body, parseInt(parentId), this.event)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse(201, response)];
                    case 3:
                        error_3 = _a.sent();
                        this.handleError(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.update = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var parentId, id, body, response, error_4;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.prerequisites(this.event)];
                    case 1:
                        _a.sent();
                        parentId = _.get(this.event, 'pathParameters.parentId');
                        id = _.get(this.event, 'pathParameters.id');
                        body = this.event.body;
                        this.validate(body, this.onUpdateValidationSchema);
                        return [4 /*yield*/, this.essence.edit(parseInt(id), body, parseInt(parentId), this.event)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse(202, response)];
                    case 3:
                        error_4 = _a.sent();
                        this.handleError(error_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.remove = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var parentId, id, response, error_5;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.prerequisites(this.event)];
                    case 1:
                        _a.sent();
                        parentId = _.get(this.event, 'pathParameters.parentId');
                        id = _.get(this.event, 'pathParameters.id');
                        this.validate({ id: id }, crudSchema_1.idSchema);
                        return [4 /*yield*/, this.essence.delete(parseInt(id), parseInt(parentId), this.event)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, this.handleResponse(204, response)];
                    case 3:
                        error_5 = _a.sent();
                        this.handleError(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.custom = function (method) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var response, error_6;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.prerequisites(this.event)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, method(this.event)];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_6 = _a.sent();
                        this.handleError(error_6);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.essence = essence;
        return _this;
    }
    CrudController.prototype.setupRestHandler = function () {
        var _this = this;
        this.setupAPIHandler();
        var restHandler = function (event, context) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var hasParentId, hasId, isCollection, handlers, resource, httpMethod, foundCustomRoute;
            return tslib_1.__generator(this, function (_a) {
                this.event = event;
                hasParentId = event["pathParameters"] && event["pathParameters"].parentId;
                hasId = event["pathParameters"] && event["pathParameters"].id;
                isCollection = (hasParentId && !hasId) || (!hasParentId && !hasId) || !event["pathParameters"];
                handlers = (isCollection) ? this.collectionHandlers : this.itemHandlers;
                resource = event["resource"];
                httpMethod = event["httpMethod"];
                if (this.customRoutes && this.customRoutes.length > 0) {
                    foundCustomRoute = this.customRoutes.find(function (customRoute) {
                        return customRoute.httpMethod === httpMethod && customRoute.route === resource;
                    });
                    if (foundCustomRoute && foundCustomRoute.method) {
                        return [2 /*return*/, this.custom(foundCustomRoute.method)];
                    }
                }
                if (httpMethod in handlers) {
                    return [2 /*return*/, handlers[httpMethod]()];
                }
                throw new createError.MethodNotAllowed();
            });
        }); };
        return middy(restHandler)
            .use(middlewares_1.jsonBodyParser())
            .use(middlewares_1.httpErrorHandler())
            .use(middlewares_1.httpMultipartBodyParser())
            .use(middlewares_1.cors());
    };
    CrudController.prototype.setupAPIHandler = function () {
        this.collectionHandlers = {
            "GET": this.index,
            "POST": this.store,
        };
        this.itemHandlers = {
            "DELETE": this.remove,
            "GET": this.show,
            "PUT": this.update,
            "POST": this.store
        };
    };
    return CrudController;
}(baseController_1.BaseController));
exports.CrudController = CrudController;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9odHRwL2NvbnRyb2xsZXJzL2NydWRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUFrRDtBQUNsRCxtREFBZ0Q7QUFHaEQsNkJBQStCO0FBQy9CLDBCQUE0QjtBQUM1QixxREFLK0I7QUFDL0IseUNBQTJDO0FBUTNDO0lBQW9DLDBDQUFjO0lBVTlDLHdCQUFZLE9BQXVCO1FBQW5DLFlBQ0ksaUJBQU8sU0FJVjtRQW9ETSxXQUFLLEdBQUc7Ozs7Ozt3QkFFUCxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXBDLFNBQW9DLENBQUM7d0JBQy9CLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUseUJBQXlCLENBQUMsQ0FBQzt3QkFDeEQsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO3dCQUNyRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLG9DQUFvQyxDQUFDLENBQUM7d0JBQzVELHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQXJGLFFBQVEsR0FBRyxTQUEwRTt3QkFFM0Ysc0JBQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUM7Ozt3QkFFMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFLLENBQUMsQ0FBQzs7Ozs7YUFFL0IsQ0FBQztRQUVLLFVBQUksR0FBRzs7Ozs7O3dCQUVOLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUss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