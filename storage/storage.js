"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageManager = require("@slynova/flydrive");
var config_1 = require("../config/config");
var config = config_1.default('storage');
var storage = new StorageManager(config);
exports.Storage = storage.disk();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0b3JhZ2Uvc3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFvRDtBQUVwRCwyQ0FBeUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsZ0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU5QixRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMifQ==