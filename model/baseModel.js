"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var database_1 = require("../database/database");
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    BaseModel.q = function () {
        return database_1.database(this.tableName);
    };
    BaseModel.find = function (id) {
        return this.q()
            .where({ id: id })
            .first();
    };
    BaseModel.update = function (id, data) {
        return this.q()
            .where({ id: id })
            .update(data);
    };
    BaseModel.create = function (data) {
        var _this = this;
        return this.q()
            .insert(data)
            .then(function (item) {
            return _this.find(item[0]);
        });
    };
    BaseModel.delete = function (id) {
        return this.q()
            .where({ id: id })
            .delete();
    };
    BaseModel.updateOrCreate = function (lookup, insert) {
        var _this = this;
        return this.q().where(lookup).update(tslib_1.__assign(tslib_1.__assign({}, lookup), insert))
            .then(function (res) {
            if (!res) {
                return _this.q().insert(Object.assign(lookup, insert));
            }
        }).then(function () {
            return _this.q().where(lookup).first();
        });
    };
    ;
    BaseModel.primaryIdColumn = "id";
    BaseModel.parentIdColumn = "id";
    BaseModel.tableName = "";
    return BaseModel;
}());
exports.BaseModel = BaseModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWwvYmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUE4QztBQUU5QztJQUFBO0lBK0NBLENBQUM7SUF4Q2lCLFdBQUMsR0FBZjtRQUNJLE9BQU8sbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVhLGNBQUksR0FBbEIsVUFBbUIsRUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUU7YUFDVixLQUFLLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7YUFDZixLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRWEsZ0JBQU0sR0FBcEIsVUFBcUIsRUFBVSxFQUFFLElBQVk7UUFDekMsT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFO2FBQ1YsS0FBSyxDQUFDLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDO2FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFYSxnQkFBTSxHQUFwQixVQUFxQixJQUFZO1FBQWpDLGlCQU1DO1FBTEcsT0FBTyxJQUFJLENBQUMsQ0FBQyxFQUFFO2FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNaLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRWEsZ0JBQU0sR0FBcEIsVUFBcUIsRUFBVTtRQUMzQixPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUU7YUFDVixLQUFLLENBQUMsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFDLENBQUM7YUFDZixNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRWEsd0JBQWMsR0FBNUIsVUFBNkIsTUFBYyxFQUFFLE1BQWM7UUFBM0QsaUJBU0M7UUFSRyxPQUFPLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSx1Q0FBSyxNQUFNLEdBQUssTUFBTSxFQUFFO2FBQ3ZELElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLE9BQU8sS0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO1FBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxLQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUFBLENBQUM7SUE3Q1kseUJBQWUsR0FBVyxJQUFJLENBQUM7SUFDL0Isd0JBQWMsR0FBVyxJQUFJLENBQUM7SUFDOUIsbUJBQVMsR0FBVyxFQUFFLENBQUM7SUE0Q3pDLGdCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ3FCLDhCQUFTIn0=