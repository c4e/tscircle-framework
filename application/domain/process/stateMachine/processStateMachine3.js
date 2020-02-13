"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var stateMachine_1 = require("../../../../stateMachine/stateMachine");
var config = {
    id: 'debitPayment',
    initial: 'started',
    context: {
        id: null,
        amount: 0,
        type: 'debit'
    },
    states: {
        started: {
            on: {
                NEXT: { target: 'paid', cond: 'isPaid' }
            }
        },
        paid: {
            on: {
                NEXT: { target: 'finished', cond: 'isDisputed' }
            }
        },
        finished: {
            type: 'final'
        }
    },
};
var options = {
    guards: {
        isPaid: function (context, event) {
            // check if paid
            return true;
        },
        isDisputed: function (context, event) {
            // check if disputed
            return false;
        }
    },
    actions: {},
    activities: {},
    services: {},
    delays: {}
};
var processStateMachine3 = /** @class */ (function (_super) {
    tslib_1.__extends(processStateMachine3, _super);
    function processStateMachine3(context) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.options = options;
        if (context.id) {
            _this.load(context.id);
        }
        else {
            _this.create(context);
        }
        return _this;
    }
    return processStateMachine3;
}(stateMachine_1.default));
exports.processStateMachine3 = processStateMachine3;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1N0YXRlTWFjaGluZTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHBsaWNhdGlvbi9kb21haW4vcHJvY2Vzcy9zdGF0ZU1hY2hpbmUvcHJvY2Vzc1N0YXRlTWFjaGluZTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQWlFO0FBVWpFLElBQU0sTUFBTSxHQUE0QztJQUNwRCxFQUFFLEVBQUUsY0FBYztJQUNsQixPQUFPLEVBQUUsU0FBUztJQUNsQixPQUFPLEVBQUU7UUFDTCxFQUFFLEVBQUUsSUFBSTtRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsSUFBSSxFQUFFLE9BQU87S0FDaEI7SUFDRCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDTCxFQUFFLEVBQUU7Z0JBQ0EsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2FBQzNDO1NBQ0o7UUFDRCxJQUFJLEVBQUU7WUFDRixFQUFFLEVBQUU7Z0JBQ0EsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO2FBQ25EO1NBQ0o7UUFDRCxRQUFRLEVBQUU7WUFDTixJQUFJLEVBQUUsT0FBTztTQUNoQjtLQUNKO0NBSUosQ0FBQztBQUVGLElBQU0sT0FBTyxHQUF3QztJQUNqRCxNQUFNLEVBQUU7UUFDSixNQUFNLEVBQUUsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNuQixnQkFBZ0I7WUFDaEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFVBQVUsRUFBRSxVQUFDLE9BQU8sRUFBRSxLQUFLO1lBQ3ZCLG9CQUFvQjtZQUNwQixPQUFPLEtBQUssQ0FBQTtRQUNoQixDQUFDO0tBQ0o7SUFDRCxPQUFPLEVBQUUsRUFBRTtJQUNYLFVBQVUsRUFBRSxFQUFFO0lBQ2QsUUFBUSxFQUFFLEVBQUU7SUFDWixNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUE7QUFFRDtJQUEwQyxnREFBWTtJQUlsRCw4QkFBWSxPQUF1QjtRQUFuQyxZQUNJLGlCQUFPLFNBTVY7UUFWUyxZQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxPQUFPLENBQUM7UUFJeEIsSUFBSSxPQUFPLENBQUMsRUFBRSxFQUFFO1lBQ1osS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEI7O0lBQ0wsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQVpELENBQTBDLHNCQUFZLEdBWXJEO0FBWlksb0RBQW9CIn0=