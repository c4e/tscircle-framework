"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var emailTypeSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
});
exports.emailTypeSchema = emailTypeSchema;
var editEmailTypeSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30),
});
exports.editEmailTypeSchema = editEmailTypeSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxUeXBlU2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwbGljYXRpb24vZG9tYWluL2VtYWlsL3NjaGVtYXMvZW1haWxUeXBlU2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWlDO0FBRWpDLElBQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtDQUMxRCxDQUFDLENBQUM7QUFNTSwwQ0FBZTtBQUp4QixJQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDMUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztDQUMvQyxDQUFDLENBQUM7QUFFdUIsa0RBQW1CIn0=