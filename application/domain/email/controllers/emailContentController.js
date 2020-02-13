"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crudController_1 = require("../../../../http/controllers/crudController");
var emailContentSchema_1 = require("../schemas/emailContentSchema");
var emailContentRepository_1 = require("../repositories/emailContentRepository");
var jwtAuth_1 = require("../../../../auth/jwtAuth");
var EmailContentController = /** @class */ (function (_super) {
    tslib_1.__extends(EmailContentController, _super);
    function EmailContentController() {
        var _this = _super.call(this, new emailContentRepository_1.EmailContentRepository()) || this;
        _this.onStoreValidationSchema = emailContentSchema_1.emailContentSchema;
        _this.onUpdateValidationSchema = emailContentSchema_1.editEmailContentSchema;
        _this.authProvider = new jwtAuth_1.JwtAuth();
        return _this;
    }
    return EmailContentController;
}(crudController_1.CrudController));
exports.EmailContentController = EmailContentController;
exports.restHandler = new EmailContentController().setupRestHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxDb250ZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGxpY2F0aW9uL2RvbWFpbi9lbWFpbC9jb250cm9sbGVycy9lbWFpbENvbnRlbnRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhFQUEyRTtBQUMzRSxvRUFBeUY7QUFDekYsaUZBQThFO0FBQzlFLG9EQUFpRDtBQUdqRDtJQUE0QyxrREFBYztJQUV0RDtRQUFBLFlBQ0ksa0JBQU0sSUFBSSwrQ0FBc0IsRUFBRSxDQUFDLFNBRXRDO1FBRUQsNkJBQXVCLEdBQUcsdUNBQWtCLENBQUM7UUFDN0MsOEJBQXdCLEdBQUcsMkNBQXNCLENBQUM7UUFKOUMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQzs7SUFDdEMsQ0FBQztJQUlMLDZCQUFDO0FBQUQsQ0FBQyxBQVRELENBQTRDLCtCQUFjLEdBU3pEO0FBVFksd0RBQXNCO0FBV25DLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxzQkFBc0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMifQ==