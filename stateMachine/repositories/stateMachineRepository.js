"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseRepository_1 = require("../../repository/baseRepository");
var stateMachineModel_1 = require("../models/stateMachineModel");
var StateMachineRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StateMachineRepository, _super);
    function StateMachineRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = stateMachineModel_1.StateMachineModel;
        return _this;
    }
    StateMachineRepository.prototype.addMachine = function (stateMachineClass, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.add({
                        filename: stateMachineClass,
                        state: state.value,
                        done: state.done,
                        state_object: JSON.stringify(state)
                    })];
            });
        });
    };
    StateMachineRepository.prototype.editStateMachine = function (stateMachineId, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.edit(stateMachineId, {
                        state: state.value,
                        done: state.done,
                        state_object: JSON.stringify(state)
                    })];
            });
        });
    };
    return StateMachineRepository;
}(baseRepository_1.BaseRepository));
exports.StateMachineRepository = StateMachineRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVNYWNoaW5lUmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0YXRlTWFjaGluZS9yZXBvc2l0b3JpZXMvc3RhdGVNYWNoaW5lUmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBK0Q7QUFDL0QsaUVBQThEO0FBRzlEO0lBQTRDLGtEQUFjO0lBQTFEO1FBQUEscUVBbUJDO1FBbEJHLFdBQUssR0FBRyxxQ0FBaUIsQ0FBQzs7SUFrQjlCLENBQUM7SUFoQmdCLDJDQUFVLEdBQXZCLFVBQXdCLGlCQUF5QixFQUFFLEtBQTJCOzs7Z0JBQzFFLHNCQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ1osUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO3dCQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7d0JBQ2hCLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztxQkFDdEMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVZLGlEQUFnQixHQUE3QixVQUE4QixjQUFzQixFQUFFLEtBQTJCOzs7Z0JBQzdFLHNCQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO3dCQUM3QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7d0JBQ2xCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTt3QkFDaEIsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO3FCQUN0QyxDQUFDLEVBQUM7OztLQUNOO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBbkJELENBQTRDLCtCQUFjLEdBbUJ6RDtBQW5CWSx3REFBc0IifQ==