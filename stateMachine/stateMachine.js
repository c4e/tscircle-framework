"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var xstate_1 = require("xstate");
var stateMachineRepository_1 = require("./repositories/stateMachineRepository");
var stateMachineHistoryRepository_1 = require("./repositories/stateMachineHistoryRepository");
var stateMachine = /** @class */ (function () {
    function stateMachine() {
        this.smRepository = new stateMachineRepository_1.StateMachineRepository();
        this.smHistoryRepository = new stateMachineHistoryRepository_1.StateMachineHistoryRepository();
    }
    stateMachine.prototype.create = function (context) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var model;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sm = xstate_1.Machine(this.config, this.options);
                        this.smInstance = this.sm.withContext(context);
                        this.state = this.smInstance.initialState;
                        this.service = xstate_1.interpret(this.sm).start(this.state).onTransition(function (state) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.state = state;
                                        return [4 /*yield*/, this.store().catch(function (err) { return err; })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, this.smRepository.addMachine(this.constructor.name, this.state)];
                    case 1:
                        model = _a.sent();
                        return [4 /*yield*/, this.smHistoryRepository.addMachineHistory(model.id, this.state)];
                    case 2:
                        _a.sent();
                        this.id = model.id;
                        return [2 /*return*/];
                }
            });
        });
    };
    stateMachine.prototype.getId = function () {
        if (!this.smInstance) {
            throw new Error('No state machine instance found');
        }
        return this.id;
    };
    stateMachine.prototype.getStatus = function () {
        if (!this.smInstance) {
            throw new Error('No state machine instance found');
        }
        return this.state.value;
    };
    stateMachine.prototype.load = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.sm = xstate_1.Machine(this.config);
                        return [4 /*yield*/, this.smRepository.get(id)];
                    case 1:
                        data = _a.sent();
                        if (data.filename !== this.constructor.name) {
                            throw new Error('State machine does not belong to class');
                        }
                        this.state = xstate_1.State.create(JSON.parse(data.state_object));
                        this.smInstance = this.sm.resolveState(this.state);
                        this.service = xstate_1.interpret(this.sm).start(this.state).onTransition(function (state) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.state = state;
                                        return [4 /*yield*/, this.store().catch(function (err) { return err; })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.id = id;
                        return [2 /*return*/];
                }
            });
        });
    };
    stateMachine.prototype.transition = function (event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.smInstance) {
                            throw new Error('No state machine instance found');
                        }
                        this.state = this.smInstance.transition(this.state, event);
                        return [4 /*yield*/, this.store()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    stateMachine.prototype.store = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.smRepository.editStateMachine(this.id, this.state)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.smHistoryRepository.addMachineHistory(this.id, this.state)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return stateMachine;
}());
exports.default = stateMachine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVNYWNoaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RhdGVNYWNoaW5lL3N0YXRlTWFjaGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBMkc7QUFDM0csZ0ZBQStFO0FBQy9FLDhGQUE2RjtBQUU3RjtJQUFBO1FBR2MsaUJBQVksR0FBMkIsSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1FBQ3BFLHdCQUFtQixHQUFrQyxJQUFJLDZEQUE2QixFQUFFLENBQUM7SUF3RXZHLENBQUM7SUFqRWdCLDZCQUFNLEdBQW5CLFVBQW9CLE9BQWU7Ozs7Ozs7d0JBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsZ0JBQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQzt3QkFFMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxrQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFPLEtBQUs7Ozs7d0NBQ3pFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3dDQUNuQixxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxFQUFILENBQUcsQ0FBQyxFQUFBOzt3Q0FBdEMsU0FBc0MsQ0FBQTs7Ozs2QkFDekMsQ0FBQyxDQUFBO3dCQUVZLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMs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