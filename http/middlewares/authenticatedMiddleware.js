"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var AuthenticatedMiddleware = /** @class */ (function () {
    function AuthenticatedMiddleware() {
        var _this = this;
        this.defaultError = {
            error: "not authenticated",
            status: 401
        };
        this.next = function (req, authenticatedUser) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                if (!authenticatedUser) {
                    Promise.reject(this.defaultError);
                }
                Promise.resolve();
                return [2 /*return*/];
            });
        }); };
    }
    return AuthenticatedMiddleware;
}());
exports.AuthenticatedMiddleware = AuthenticatedMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGVudGljYXRlZE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9odHRwL21pZGRsZXdhcmVzL2F1dGhlbnRpY2F0ZWRNaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQUE7UUFBQSxpQkFhQztRQVpHLGlCQUFZLEdBQUc7WUFDWCxLQUFLLEVBQUUsbUJBQW1CO1lBQzFCLE1BQU0sRUFBRSxHQUFHO1NBQ2QsQ0FBQztRQUVGLFNBQUksR0FBRyxVQUFPLEdBQUcsRUFBRSxpQkFBaUI7O2dCQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUNyQztnQkFFRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7OzthQUNyQixDQUFDO0lBQ04sQ0FBQztJQUFELDhCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSwwREFBdUIifQ==