"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var createError = require("http-errors");
var _ = require("lodash");
;
var BaseController = /** @class */ (function () {
    function BaseController() {
        var _this = this;
        this.prerequisites = function (req) {
            return _this.authenticate(req)
                .then(function () {
                return _this.checkMiddlewares(req, _this.authenticatedUser);
            });
        };
        this.authenticate = function (req) {
            return new Promise(function (resolve, reject) {
                if (_this.authProvider) {
                    console.log('authenticating.....')
                    return _this.authProvider.authenticate(req)
                        .then(function (user) {
                        console.log('authenticate user', user)
                        _this.authenticatedUser = user;
                        resolve(user);
                    }).catch(function (error) {
                        console.warn('waning here', error)
                        reject(error);
                    });
                }
                resolve('No auth provider configured');
            });
        };
        this.checkMiddlewares = function (req, authenticatedUser) {
            var promises = Array();
            if (_this.middlewares) {
                _this.middlewares.forEach(function (middleware) {
                    promises.push(middleware.next(req, authenticatedUser));
                });
            }
            return Promise.all(promises);
        };
        this.validate = function (data, schema) {
            if (!schema) {
                return data;
            }
            var error = schema.validate(data, { abortEarly: false }).error;
            if (error) {
                throw {
                    status: 422,
                    error: error.details
                };
            }
            else {
                return data;
            }
        };
    }
    BaseController.prototype.handleError = function (errorController) {
        console.warn(errorController);
        var error = errorController.error, status = errorController.status, statusCode = errorController.statusCode, message = errorController.message, Message = errorController.Message;
        error = _.isObjectLike(error) ? JSON.stringify(error) : null;
        statusCode = status || statusCode;
        message = message || Message;
        if (statusCode) {
            if (error || message) {
                throw createError(statusCode, error || message);
            }
            else {
                throw createError(statusCode);
            }
        }
        else {
            throw new createError.InternalServerError();
        }
    };
    BaseController.prototype.handleResponse = function (statusCode, response, headers) {
        response = _.isObjectLike(response) ? JSON.stringify(response) : response;
        return tslib_1.__assign({ statusCode: statusCode, body: response }, (headers && { headers: headers }));
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9odHRwL2NvbnRyb2xsZXJzL2Jhc2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHlDQUEyQztBQUUzQywwQkFBNEI7QUFZM0IsQ0FBQztBQUVGO0lBQUE7UUFBQSxpQkFxRkM7UUEvRVUsa0JBQWEsR0FBRyxVQUFDLEdBQUc7WUFDdkIsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQztpQkFDeEIsSUFBSSxDQUFDO2dCQUNGLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUMsQ0FBQztRQUVLLGlCQUFZLEdBQUcsVUFBQyxHQUFHO1lBQ3RCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDL0IsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO29CQUNuQixPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzt5QkFDckMsSUFBSSxDQUFDLFVBQUMsSUFBSTt3QkFDUCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO3dCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7d0JBQ1gsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQztpQkFDVjtnQkFDRCxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVLLHFCQUFnQixHQUFHLFVBQUMsR0FBRyxFQUFFLGlCQUFpQjtZQUM3QyxJQUFJLFFBQVEsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUV2QixJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVTtvQkFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzNELENBQUMsQ0FBQyxDQUFDO2FBQ047WUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDO1FBRUssYUFBUSxHQUFHLFVBQUMsSUFBSSxFQUFFLE1BQU07WUFDM0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDVCxPQUFPLElBQUksQ0FBQzthQUNmO1lBRU0sSUFBQSwwREFBSyxDQUErQztZQUUzRCxJQUFJLEtBQUssRUFBRTtnQkFDUCxNQUEyQjtvQkFDdkIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO2lCQUN2QixDQUFDO2FBQ0w7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUM7YUFDZjtRQUNMLENBQUMsQ0FBQztJQThCTixDQUFDO0lBNUJVLG9DQUFXLEdBQWxCLFVBQW1CLGVBQW9DO1FBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFekIsSUFBQSw2QkFBSyxFQUFFLCtCQUFNLEVBQUUsdUNBQVUsRUFBRSxpQ0FBTyxFQUFFLGlDQUFPLENBQW9CO1FBQ3BFLEtBQUssR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0QsVUFBVSxHQUFHLE1BQU0sSUFBSSxVQUFVLENBQUM7UUFDbEMsT0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUM7UUFFN0IsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLEtBQUssSUFBSSxPQUFPLEVBQUU7Z0JBQ2xCLE1BQU0sV0FBVyxDQUFDLFVBQVUsRUFBRSxLQUFLLElBQUksT0FBTyxDQUFDLENBQUE7YUFDbEQ7aUJBQU07Z0JBQ0gsTUFBTSxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDaEM7U0FDSjthQUFNO1lBQ0gsTUFBTSxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUVNLHVDQUFjLEdBQXJCLFVBQXNCLFVBQWtCLEVBQUUsUUFBUSxFQUFFLE9BQWlCO1FBQ2pFLFFBQVEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFMUUsMEJBQ0ksVUFBVSxFQUFFLFVBQVUsRUFDdEIsSUFBSSxFQUFFLFFBQVEsSUFDWCxDQUFDLE9BQU8sSUFBSSxFQUFDLE9BQU8sU0FBQSxFQUFDLENBQUMsRUFDM0I7SUFDTixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBckZELElBcUZDO0FBckZZLHdDQUFjIn0=