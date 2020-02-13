"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crudController_1 = require("../../../../http/controllers/crudController");
var emailRepository_1 = require("../repositories/emailRepository");
var httpMethods_1 = require("../../../../http/types/httpMethods");
var EmailSpecialController = /** @class */ (function (_super) {
    tslib_1.__extends(EmailSpecialController, _super);
    function EmailSpecialController() {
        var _this = _super.call(this, new emailRepository_1.EmailRepository()) || this;
        _this.repository = new emailRepository_1.EmailRepository();
        return _this;
    }
    Object.defineProperty(EmailSpecialController.prototype, "customRoutes", {
        get: function () {
            return [
                {
                    route: '/email/teams/{teamId}',
                    httpMethod: httpMethods_1.HttpMethods.GET,
                    method: this.repository.getEmailsByTeamId
                },
                {
                    route: '/email/upload',
                    httpMethod: httpMethods_1.HttpMethods.POST,
                    method: this.repository.uploadFile
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    return EmailSpecialController;
}(crudController_1.CrudController));
exports.EmailSpecialController = EmailSpecialController;
exports.restHandler = new EmailSpecialController().setupRestHandler();
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxTcGVjaWFsQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGxpY2F0aW9uL2RvbWFpbi9lbWFpbC9jb250cm9sbGVycy9lbWFpbFNwZWNpYWxDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhFQUF3RjtBQUN4RixtRUFBZ0U7QUFDaEUsa0VBQStEO0FBRy9EO0lBQTRDLGtEQUFjO0lBR3REO1FBQUEsWUFDSSxrQkFBTSxJQUFJLGlDQUFlLEVBQUUsQ0FBQyxTQUcvQjtRQURHLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7O0lBQzVDLENBQUM7SUFFRCxzQkFBSSxnREFBWTthQUFoQjtZQUNJLE9BQU87Z0JBQ0g7b0JBQ0ksS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsVUFBVSxFQUFFLHlCQUFXLENBQUMsR0FBRztvQkFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCO2lCQUM1QztnQkFDRDtvQkFDSSxLQUFLLEVBQUUsZUFBZTtvQkFDdEIsVUFBVSxFQUFFLHlCQUFXLENBQUMsSUFBSTtvQkFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVTtpQkFDckM7YUFDSixDQUFBO1FBQ0wsQ0FBQzs7O09BQUE7SUFFTCw2QkFBQztBQUFELENBQUMsQUF4QkQsQ0FBNEMsK0JBQWMsR0F3QnpEO0FBeEJZLHdEQUFzQjtBQTBCbkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLHNCQUFzQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUFBLENBQUMifQ==