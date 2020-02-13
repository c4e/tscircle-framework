"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var crudController_1 = require("../../../../http/controllers/crudController");
var emailSchema_1 = require("../schemas/emailSchema");
var emailRepository_1 = require("../repositories/emailRepository");
var EmailController = /** @class */ (function (_super) {
    tslib_1.__extends(EmailController, _super);
    function EmailController() {
        var _this = _super.call(this, new emailRepository_1.EmailRepository()) || this;
        _this.onStoreValidationSchema = emailSchema_1.emailSchema;
        _this.onUpdateValidationSchema = emailSchema_1.editEmailSchema;
        return _this;
    }
    return EmailController;
}(crudController_1.CrudController));
exports.EmailController = EmailController;
exports.restHandler = new EmailController().setupRestHandler();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwbGljYXRpb24vZG9tYWluL2VtYWlsL2NvbnRyb2xsZXJzL2VtYWlsQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4RUFBMkU7QUFDM0Usc0RBQW9FO0FBQ3BFLG1FQUFnRTtBQUVoRTtJQUFxQywyQ0FBYztJQUUvQztRQUFBLFlBQ0ksa0JBQU0sSUFBSSxpQ0FBZSxFQUFFLENBQUMsU0FDL0I7UUFFRCw2QkFBdUIsR0FBRyx5QkFBVyxDQUFDO1FBQ3RDLDhCQUF3QixHQUFHLDZCQUFlLENBQUM7O0lBSDNDLENBQUM7SUFJTCxzQkFBQztBQUFELENBQUMsQUFSRCxDQUFxQywrQkFBYyxHQVFsRDtBQVJZLDBDQUFlO0FBVTVCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDIn0=