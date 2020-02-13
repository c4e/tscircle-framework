"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseRepository_1 = require("../../../../repository/baseRepository");
var emailModel_1 = require("../models/emailModel");
var createError = require("http-errors");
var EmailRepository = /** @class */ (function (_super) {
    tslib_1.__extends(EmailRepository, _super);
    function EmailRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = emailModel_1.Email;
        _this.getEmailsByTeamId = function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var teamId, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        teamId = event.pathParameters && event.pathParameters.teamId;
                        if (!teamId) {
                            throw new createError.BadRequest('missing teamId parameter');
                        }
                        return [4 /*yield*/, emailModel_1.Email.q().where({ team_id: teamId })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                body: JSON.stringify(response),
                                statusCode: 200
                            }];
                }
            });
        }); };
        _this.uploadFile = function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, {
                        body: JSON.stringify(event.body),
                        statusCode: 200,
                    }];
            });
        }); };
        return _this;
    }
    return EmailRepository;
}(baseRepository_1.BaseRepository));
exports.EmailRepository = EmailRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxSZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwbGljYXRpb24vZG9tYWluL2VtYWlsL3JlcG9zaXRvcmllcy9lbWFpbFJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0VBQXFFO0FBQ3JFLG1EQUEyQztBQUUzQyx5Q0FBMkM7QUFFM0M7SUFBcUMsMkNBQWM7SUFBbkQ7UUFBQSxxRUF5QkM7UUF4QkcsV0FBSyxHQUFHLGtCQUFLLENBQUM7UUFFUCx1QkFBaUIsR0FBRyxVQUFPLEtBQXNCOzs7Ozt3QkFDOUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxjQUFjLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7d0JBRW5FLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQ1QsTUFBTSxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt5QkFDaEU7d0JBRWdCLHFCQUFNLGtCQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUE7O3dCQUFuRCxRQUFRLEdBQUcsU0FBd0M7d0JBRXpELHNCQUFPO2dDQUNILElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQ0FDOUIsVUFBVSxFQUFFLEdBQUc7NkJBQ2xCLEVBQUE7OzthQUNKLENBQUM7UUFFSyxnQkFBVSxHQUFHLFVBQU8sS0FBc0I7O2dCQUU3QyxzQkFBTzt3QkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dCQUNoQyxVQUFVLEVBQUUsR0FBRztxQkFDbEIsRUFBQzs7YUFDTCxDQUFDOztJQUNOLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUF6QkQsQ0FBcUMsK0JBQWMsR0F5QmxEO0FBekJZLDBDQUFlIn0=