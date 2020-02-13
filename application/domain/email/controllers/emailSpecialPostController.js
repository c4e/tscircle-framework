"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crudController_1 = require("../../../../http/controllers/crudController");
var emailSchema_1 = require("../schemas/emailSchema");
var emailRepository_1 = require("../repositories/emailRepository");
var EmailSpecialPostController = /** @class */ (function (_super) {
    tslib_1.__extends(EmailSpecialPostController, _super);
    function EmailSpecialPostController() {
        var _this = _super.call(this, new emailRepository_1.EmailRepository()) || this;
        _this.onStoreValidationSchema = emailSchema_1.emailSchema;
        return _this;
    }
    return EmailSpecialPostController;
}(crudController_1.CrudController));
exports.EmailSpecialPostController = EmailSpecialPostController;
exports.restHandler = new EmailSpecialPostController().setupRestHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxTcGVjaWFsUG9zdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHBsaWNhdGlvbi9kb21haW4vZW1haWwvY29udHJvbGxlcnMvZW1haWxTcGVjaWFsUG9zdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEVBQTJFO0FBQzNFLHNEQUFtRDtBQUNuRCxtRUFBZ0U7QUFHaEU7SUFBZ0Qsc0RBQWM7SUFFMUQ7UUFBQSxZQUNJLGtCQUFNLElBQUksaUNBQWUsRUFBRSxDQUFDLFNBQy9CO1FBRUQsNkJBQXVCLEdBQUcseUJBQVcsQ0FBQzs7SUFGdEMsQ0FBQztJQUdMLGlDQUFDO0FBQUQsQ0FBQyxBQVBELENBQWdELCtCQUFjLEdBTzdEO0FBUFksZ0VBQTBCO0FBU3ZDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSwwQkFBMEIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMifQ==