"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var emailSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
});
exports.emailSchema = emailSchema;
var editEmailSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30),
});
exports.editEmailSchema = editEmailSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxTY2hlbWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcHBsaWNhdGlvbi9kb21haW4vZW1haWwvc2NoZW1hcy9lbWFpbFNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUFpQztBQUVqQyxJQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2xDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUU7Q0FDMUQsQ0FBQyxDQUFDO0FBTU0sa0NBQVc7QUFKcEIsSUFBTSxlQUFlLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztJQUN0QyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0NBQy9DLENBQUMsQ0FBQztBQUVtQiwwQ0FBZSJ9