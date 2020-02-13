"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseRepository_1 = require("../../repository/baseRepository");
var stateMachineHistoryModel_1 = require("../models/stateMachineHistoryModel");
var StateMachineHistoryRepository = /** @class */ (function (_super) {
    tslib_1.__extends(StateMachineHistoryRepository, _super);
    function StateMachineHistoryRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = stateMachineHistoryModel_1.StateMachineModeHistoryModel;
        return _this;
    }
    StateMachineHistoryRepository.prototype.addMachineHistory = function (stateMachineId, state) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.add({
                        state: state.value,
                        state_object: JSON.stringify(state)
                    }, stateMachineId)];
            });
        });
    };
    return StateMachineHistoryRepository;
}(baseRepository_1.BaseRepository));
exports.StateMachineHistoryRepository = StateMachineHistoryRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVNYWNoaW5lSGlzdG9yeVJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zdGF0ZU1hY2hpbmUvcmVwb3NpdG9yaWVzL3N0YXRlTWFjaGluZUhpc3RvcnlSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUErRDtBQUMvRCwrRUFBZ0Y7QUFJaEY7SUFBbUQseURBQWM7SUFBakU7UUFBQSxxRUFVQztRQVRHLFdBQUssR0FBRyx1REFBNEIsQ0FBQzs7SUFTekMsQ0FBQztJQU5nQix5REFBaUIsR0FBOUIsVUFBK0IsY0FBc0IsRUFBRSxLQUEyQjs7O2dCQUM5RSxzQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSzt3QkFDbEIsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO3FCQUN0QyxFQUFFLGNBQWMsQ0FBQyxFQUFBOzs7S0FDckI7SUFDTCxvQ0FBQztBQUFELENBQUMsQUFWRCxDQUFtRCwrQkFBYyxHQVVoRTtBQVZZLHNFQUE2QiJ9