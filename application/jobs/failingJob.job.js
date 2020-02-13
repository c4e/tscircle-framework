"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var failingJob = /** @class */ (function () {
    function failingJob(myObj) {
        this.myObj = myObj;
    }
    failingJob.prototype.handle = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                throw new Error('failed');
            });
        });
    };
    return failingJob;
}());
exports.failingJob = failingJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFpbGluZ0pvYi5qb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hcHBsaWNhdGlvbi9qb2JzL2ZhaWxpbmdKb2Iuam9iLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBSUksb0JBQW1CLEtBQUs7UUFFcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVZLDJCQUFNLEdBQW5COzs7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzs7O0tBQzdCO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLGdDQUFVIn0=