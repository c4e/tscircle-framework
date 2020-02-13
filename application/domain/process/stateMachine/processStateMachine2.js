"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var stateMachine_1 = require("../../../../stateMachine/stateMachine");
var processStateMachine2 = /** @class */ (function (_super) {
    tslib_1.__extends(processStateMachine2, _super);
    function processStateMachine2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            id: 'quiet',
            initial: 'start',
            context: {
                amount: 0,
                type: ' yeah'
            },
            states: {
                start: {
                    on: {
                        NEXT: 'paid'
                    }
                },
                paid: {
                    on: {
                        NEXT: 'finished'
                    }
                },
                finished: {
                    type: 'final'
                }
            }
        };
        return _this;
    }
    processStateMachine2.prototype.create = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.create.call(this, context)];
            });
        });
    };
    return processStateMachine2;
}(stateMachine_1.default));
exports.processStateMachine2 = processStateMachine2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1N0YXRlTWFjaGluZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHBsaWNhdGlvbi9kb21haW4vcHJvY2Vzcy9zdGF0ZU1hY2hpbmUvcHJvY2Vzc1N0YXRlTWFjaGluZTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQWlFO0FBUWpFO0lBQTBDLGdEQUFZO0lBQXREO1FBQUEscUVBK0JDO1FBdkJhLFlBQU0sR0FBNEM7WUFDeEQsRUFBRSxFQUFFLE9BQU87WUFDWCxPQUFPLEVBQUUsT0FBTztZQUNoQixPQUFPLEVBQUU7Z0JBQ0wsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLE9BQU87YUFDaEI7WUFDRCxNQUFNLEVBQUU7Z0JBQ0osS0FBSyxFQUFFO29CQUNILEVBQUUsRUFBRTt3QkFDQSxJQUFJLEVBQUUsTUFBTTtxQkFDZjtpQkFDSjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0YsRUFBRSxFQUFFO3dCQUNBLElBQUksRUFBRSxVQUFVO3FCQUNuQjtpQkFDSjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLE9BQU87aUJBQ2hCO2FBQ0o7U0FDSixDQUFDOztJQUNOLENBQUM7SUE3QmdCLHFDQUFNLEdBQW5CLFVBQW9CLE9BQXVCOzs7Z0JBQ3ZDLHNCQUFPLGlCQUFNLE1BQU0sWUFBQyxPQUFPLENBQUMsRUFBQzs7O0tBQ2hDO0lBMkJMLDJCQUFDO0FBQUQsQ0FBQyxBQS9CRCxDQUEwQyxzQkFBWSxHQStCckQ7QUEvQlksb0RBQW9CIn0=