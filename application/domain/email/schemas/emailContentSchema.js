"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Joi = require("@hapi/joi");
var emailContentSchema = Joi.object().keys({
    data: Joi.string().required(),
    html: Joi.string().required(),
    active: Joi.boolean(),
});
exports.emailContentSchema = emailContentSchema;
var editEmailContentSchema = Joi.object().keys({
    mjml: Joi.string(),
    html: Joi.string(),
    active: Joi.boolean(),
});
exports.editEmailContentSchema = editEmailContentSchema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxDb250ZW50U2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBwbGljYXRpb24vZG9tYWluL2VtYWlsL3NjaGVtYXMvZW1haWxDb250ZW50U2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWlDO0FBRWpDLElBQU0sa0JBQWtCLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztJQUN6QyxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUM3QixNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRTtDQUN4QixDQUFDLENBQUM7QUFRTSxnREFBa0I7QUFOM0IsSUFBTSxzQkFBc0IsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQzdDLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ2xCLElBQUksRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ2xCLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFO0NBQ3hCLENBQUMsQ0FBQztBQUUwQix3REFBc0IifQ==