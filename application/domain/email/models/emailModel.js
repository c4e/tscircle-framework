"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseModel_1 = require("../../../../model/baseModel");
var emailTypeModel_1 = require("./emailTypeModel");
var Email = /** @class */ (function (_super) {
    tslib_1.__extends(Email, _super);
    function Email() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Email.tableName = "email";
    Email.parentIdColumn = "email_type_id";
    Email.parentModel = emailTypeModel_1.EmailType;
    Email.parentTakeOverColumns = [{
            source: 'team_id',
            target: 'team_id'
        }];
    return Email;
}(baseModel_1.BaseModel));
exports.Email = Email;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGxpY2F0aW9uL2RvbWFpbi9lbWFpbC9tb2RlbHMvZW1haWxNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBc0Q7QUFDdEQsbURBQTJDO0FBTzNDO0lBQTJCLGlDQUFTO0lBQXBDOztJQVFBLENBQUM7SUFQaUIsZUFBUyxHQUFXLE9BQU8sQ0FBQztJQUM1QixvQkFBYyxHQUFXLGVBQWUsQ0FBQztJQUN6QyxpQkFBVyxHQUFHLDBCQUFTLENBQUM7SUFDeEIsMkJBQXFCLEdBQUcsQ0FBQztZQUNuQyxNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsU0FBUztTQUNwQixDQUFDLENBQUM7SUFDUCxZQUFDO0NBQUEsQUFSRCxDQUEyQixxQkFBUyxHQVFuQztBQVJZLHNCQUFLIn0=