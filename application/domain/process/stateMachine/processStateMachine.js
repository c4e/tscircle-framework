"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var stateMachine_1 = require("../../../../stateMachine/stateMachine");
var processStateMachine = /** @class */ (function (_super) {
    tslib_1.__extends(processStateMachine, _super);
    function processStateMachine() {
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
                        NEXT: 'waiting'
                    }
                },
                waiting: {
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
    processStateMachine.prototype.create = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, _super.prototype.create.call(this, context)];
            });
        });
    };
    return processStateMachine;
}(stateMachine_1.default));
exports.processStateMachine = processStateMachine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1N0YXRlTWFjaGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FwcGxpY2F0aW9uL2RvbWFpbi9wcm9jZXNzL3N0YXRlTWFjaGluZS9wcm9jZXNzU3RhdGVNYWNoaW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFpRTtBQVFqRTtJQUF5QywrQ0FBWTtJQUFyRDtRQUFBLHFFQW9DQztRQTVCYSxZQUFNLEdBQTRDO1lBQ3hELEVBQUUsRUFBRSxPQUFPO1lBQ1gsT0FBTyxFQUFFLE9BQU87WUFDaEIsT0FBTyxFQUFFO2dCQUNMLE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0QsTUFBTSxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDSCxFQUFFLEVBQUU7d0JBQ0EsSUFBSSxFQUFFLFNBQVM7cUJBQ2xCO2lCQUNKO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxFQUFFLEVBQUU7d0JBQ0EsSUFBSSxFQUFFLE1BQU07cUJBQ2Y7aUJBQ0o7Z0JBQ0QsSUFBSSxFQUFFO29CQUNGLEVBQUUsRUFBRTt3QkFDQSxJQUFJLEVBQUUsVUFBVTtxQkFDbkI7aUJBQ0o7Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLElBQUksRUFBRSxPQUFPO2lCQUNoQjthQUNKO1NBQ0osQ0FBQzs7SUFDTixDQUFDO0lBbENnQixvQ0FBTSxHQUFuQixVQUFvQixPQUF1Qjs7O2dCQUN2QyxzQkFBTyxpQkFBTSxNQUFNLFlBQUMsT0FBTyxDQUFDLEVBQUM7OztLQUNoQztJQWdDTCwwQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBeUMsc0JBQVksR0FvQ3BEO0FBcENZLGtEQUFtQiJ9