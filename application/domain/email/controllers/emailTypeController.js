"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crudController_1 = require("../../../../http/controllers/crudController");
var emailTypeSchema_1 = require("../schemas/emailTypeSchema");
var emailTypeRepository_1 = require("../repositories/emailTypeRepository");
var jwtAuth_1 = require("../../../../auth/jwtAuth");
var EmailTypeController = /** @class */ (function (_super) {
    tslib_1.__extends(EmailTypeController, _super);
    function EmailTypeController() {
        var _this = _super.call(this, new emailTypeRepository_1.EmailTypeRepository()) || this;
        _this.onStoreValidationSchema = emailTypeSchema_1.emailTypeSchema;
        _this.onUpdateValidationSchema = emailTypeSchema_1.editEmailTypeSchema;
        _this.authProvider = new jwtAuth_1.JwtAuth();
        return _this;
    }
    return EmailTypeController;
}(crudController_1.CrudController));
exports.EmailTypeController = EmailTypeController;
exports.restHandler = new EmailTypeController().setupRestHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxUeXBlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGxpY2F0aW9uL2RvbWFpbi9lbWFpbC9jb250cm9sbGVycy9lbWFpbFR5cGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhFQUEyRTtBQUMzRSw4REFBZ0Y7QUFDaEYsMkVBQXdFO0FBQ3hFLG9EQUFpRDtBQUVqRDtJQUF5QywrQ0FBYztJQUVuRDtRQUFBLFlBQ0ksa0JBQU0sSUFBSSx5Q0FBbUIsRUFBRSxDQUFDLFNBRW5DO1FBRUQsNkJBQXVCLEdBQUcsaUNBQWUsQ0FBQztRQUMxQyw4QkFBd0IsR0FBRyxxQ0FBbUIsQ0FBQztRQUozQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDOztJQUN0QyxDQUFDO0lBSUwsMEJBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBeUMsK0JBQWMsR0FTdEQ7QUFUWSxrREFBbUI7QUFXaEMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyJ9