"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BaseRepository = /** @class */ (function () {
    function BaseRepository() {
    }
    BaseRepository.prototype.get = function (id, parentId, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, this.model
                        .q()
                        .where((_a = {}, _a[this.model.primaryIdColumn] = id, _a))
                        .modify(function (query) {
                        var _a;
                        if (parentId) {
                            query.where((_a = {}, _a[_this.model.parentIdColumn] = parentId, _a));
                        }
                    })
                        .first()
                        .catch(function (error) {
                        throw {
                            status: 400,
                            error: error
                        };
                    })];
            });
        });
    };
    BaseRepository.prototype.getAllByIds = function (parentIds, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.model
                        .q()
                        .whereIn(this.model.parentIdColumn, parentIds)
                        .catch(function (error) {
                        throw {
                            status: 400,
                            error: error
                        };
                    })];
            });
        });
    };
    BaseRepository.prototype.getAll = function (searchQuery, searchColumn, parentId, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.model
                        .q()
                        .modify(function (query) {
                        if (searchQuery && searchColumn) {
                            query.where(searchColumn, 'like', '%' + searchQuery + '%');
                        }
                    })
                        .modify(function (query) {
                        var _a;
                        if (parentId) {
                            query.where((_a = {}, _a[_this.model.parentIdColumn] = parentId, _a));
                        }
                    })
                        .catch(function (error) {
                        throw {
                            status: 400,
                            error: error
                        };
                    })];
            });
        });
    };
    BaseRepository.prototype.add = function (data, parentId, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var parent_1, error_1;
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!parentId) return [3 /*break*/, 4];
                        data = tslib_1.__assign(tslib_1.__assign({}, data), (_a = {}, _a[this.model.parentIdColumn] = parentId, _a));
                        if (!this.model.parentTakeOverColumns) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.model.parentModel.find(parentId)];
                    case 2:
                        parent_1 = _b.sent();
                        this.model.parentTakeOverColumns.forEach(function (item) {
                            data[item.target] = parent_1[item.source];
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        throw {
                            status: 400,
                            error: error_1
                        };
                    case 4: return [2 /*return*/, this.model
                            .create(data)
                            .catch(function (error) {
                            throw {
                                status: 400,
                                error: error
                            };
                        })];
                }
            });
        });
    };
    BaseRepository.prototype.edit = function (id, data, parentId, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.model
                        .update(id, data)
                        .then(function (res) {
                        if (!res) {
                            throw {
                                status: 400,
                                error: new Error('Could not update')
                            };
                        }
                    })
                        .catch(function (error) {
                        throw {
                            status: 400,
                            error: error
                        };
                    })];
            });
        });
    };
    BaseRepository.prototype.delete = function (id, parentId, event) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                return [2 /*return*/, this.model
                        .q()
                        .where((_a = {}, _a[this.model.primaryIdColumn] = id, _a))
                        .modify(function (query) {
                        var _a;
                        if (parentId && false) {
                            query.where((_a = {}, _a[_this.model.parentIdColumn] = parentId, _a));
                        }
                    })
                        .delete()
                        .catch(function (error) {
                        throw {
                            status: 400,
                            error: error
                        };
                    })];
            });
        });
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yZXBvc2l0b3J5L2Jhc2VSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQUE7SUF1SEEsQ0FBQztJQXBIZ0IsNEJBQUcsR0FBaEIsVUFBaUIsRUFBVSxFQUFFLFFBQWlCLEVBQUUsS0FBdUI7Ozs7O2dCQUNuRSxzQkFBTyxJQUFJLENBQUMsS0FBSzt5QkFDWixDQUFDLEVBQUU7eUJBQ0gsS0FBSyxXQUFFLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLElBQUcsRUFBRSxNQUFFO3lCQUN6QyxNQUFNLENBQUMsVUFBQyxLQUFLOzt3QkFDVixJQUFJLFFBQVEsRUFBRTs0QkFDVixLQUFLLENBQUMsS0FBSyxXQUFFLEdBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUcsUUFBUSxNQUFFLENBQUE7eUJBQ3ZEO29CQUNMLENBQUMsQ0FBQzt5QkFDRCxLQUFLLEVBQUU7eUJBQ1AsS0FBSyxDQUFDLFVBQUEsS0FBSzt3QkFDUixNQUEyQjs0QkFDdkIsTUFBTSxFQUFFLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLEtBQUs7eUJBQ2YsQ0FBQztvQkFDTixDQUFDLENBQUMsRUFBQzs7O0tBQ1Y7SUFFWSxvQ0FBVyxHQUF4QixVQUF5QixTQUFhLEVBQUUsS0FBdUI7OztnQkFDM0Qsc0JBQU8sSUFBSSxDQUFDLEtBQUs7eUJBQ1osQ0FBQyxFQUFFO3lCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7eUJBQzdDLEtBQUssQ0FBQyxVQUFBLEtBQUs7d0JBQ1IsTUFBMkI7NEJBQ3ZCLE1BQU0sRUFBRSxHQUFHOzRCQUNYLEtBQUssRUFBRSxLQUFLO3lCQUNmLENBQUM7b0JBQ04sQ0FBQyxDQUFDLEVBQUM7OztLQUNWO0lBRVksK0JBQU0sR0FBbkIsVUFBb0IsV0FBb0IsRUFBRSxZQUFxQixF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