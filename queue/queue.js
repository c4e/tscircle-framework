"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ESSerializer = require("esserializer");
var failedJob_1 = require("./failedJob");
var path = require("path");
var glob_1 = require("glob");
var AWS = require('aws-sdk');
var config_1 = require("../config/config");
var config = config_1.default('queue');
var currentConf = config[config.default];
AWS.config.update({
    region: currentConf.region,
    endpoint: currentConf.endpoint
});
var sqs = new AWS.SQS();
var MAX_TRY_COUNTS = currentConf.max_tries;
var Queue = /** @class */ (function () {
    function Queue() {
    }
    Queue.dispatch = function (jobClass) {
        var serializeClass = ESSerializer.serialize(jobClass);
        var params = {
            MessageBody: serializeClass,
            QueueUrl: currentConf.endpoint
        };
        return sqs.sendMessage(params).promise()
            .catch(function (err) {
            console.log("Error", err);
        });
    };
    Queue.handleMessages = function (messages) {
        var _this = this;
        var promises = Array();
        messages.forEach(function (message) {
            promises.push(_this.handleMessage(message));
        });
        return Promise.all(promises);
    };
    Queue.handleMessage = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var job, deleteParams, err_1, payload, receiveCount;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        job = ESSerializer.deserialize(message.Body, this.getAllJobClasses());
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 9]);
                        return [4 /*yield*/, job.handle()];
                    case 2:
                        _a.sent();
                        deleteParams = {
                            QueueUrl: currentConf.endpoint,
                            ReceiptHandle: message.ReceiptHandle
                        };
                        return [4 /*yield*/, sqs.deleteMessage(deleteParams).promise()];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        err_1 = _a.sent();
                        payload = {
                            name: JSON.parse(message.Body)['className'],
                            payload: message.Body,
                            error: err_1.stack
                        };
                        if (!!message.Attributes) return [3 /*break*/, 6];
                        return [4 /*yield*/, failedJob_1.FailedJob.create(payload)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        receiveCount = +message.Attributes.ApproximateReceiveCount;
                        if (!(receiveCount === undefined || receiveCount > MAX_TRY_COUNTS)) return [3 /*break*/, 8];
                        return [4 /*yield*/, failedJob_1.FailedJob.create(payload)];
                    case 7: return [2 /*return*/, _a.sent()];
                    case 8: return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    Queue.getAllJobClasses = function () {
        var classes = Array();
        var files = glob_1.glob.sync(config.jobsPath);
        files.forEach(function (file) {
            var relFilePath = path.relative(__dirname, '/' + process.cwd()) + '/' + file;
            var module = require(relFilePath);
            classes.push(module[Object.keys(module)[0]]);
        });
        return classes;
    };
    //only used for local env
    //in an AWS env the sqs queue should trigger lambda functions automatically
    Queue.fetchJobs = function () {
        var _this = this;
        var params = {
            QueueUrl: currentConf.endpoint,
            VisibilityTimeout: 40,
            WaitTimeSeconds: 0,
            AttributeNames: ['All']
        };
        return sqs.receiveMessage(params).promise()
            .then(function (data) {
            if (data.Messages) {
                return _this.handleMessages(data.Messages);
            }
        })
            .catch(function (error) {
            console.log('Error', error);
        });
    };
    Queue.getQueueAttributes = function () {
        var params = {
            QueueUrl: currentConf.endpoint,
            AttributeNames: [
                'ApproximateNumberOfMessages',
                'ApproximateNumberOfMessagesNotVisible',
                'ApproximateNumberOfMessagesDelayed'
            ]
        };
        return new Promise(function (resolve, reject) {
            sqs.getQueueAttributes(params, function (err, result) {
                if (err) {
                    return reject(err);
                }
                resolve(result.Attributes);
            });
        });
    };
    return Queue;
}());
exports.Queue = Queue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9xdWV1ZS9xdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBNkM7QUFDN0MseUNBQXNDO0FBQ3RDLDJCQUE2QjtBQUM3Qiw2QkFBMEI7QUFFMUIsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRS9CLDJDQUF5QztBQUV6QyxJQUFNLE1BQU0sR0FBRyxnQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWxDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFM0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDZCxNQUFNLEVBQUUsV0FBVyxDQUFDLE1BQU07SUFDMUIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRO0NBQ2pDLENBQUMsQ0FBQztBQUVILElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLElBQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7QUFFN0M7SUFBQTtJQWlIQSxDQUFDO0lBL0dpQixjQUFRLEdBQXRCLFVBQXVCLFFBQVE7UUFFM0IsSUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFNLE1BQU0sR0FBRztZQUNYLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUTtTQUNqQyxDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRTthQUNuQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRWEsb0JBQWMsR0FBNUIsVUFBNkIsUUFBUTtRQUFyQyxpQkFVQztRQVRHLElBQUksUUFBUSxHQUFHLEtBQUssRUFBRSxDQUFDO1FBRXZCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO1lBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQ1QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FDOUIsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFb0IsbUJBQWEsR0FBbEMsVUFBbUMsT0FBTzs7Ozs7O3dCQUVoQyxHQUFHLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7Ozs7d0JBR3hFLHFCQUFNLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQWxCLFNBQWtCLENBQUM7d0JBRWIsWUFBWSxHQUFHOzRCQUNqQixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7NEJBQzlCLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYTt5QkFDdkMsQ0FBQzt3QkFFSyxxQkFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFBOzRCQUF0RCxzQkFBTyxTQUErQyxFQUFDOzs7d0JBRWpELE9BQU8sR0FBRzs0QkFDWixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDOzRCQUMzQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUk7NEJBQ3JCLEtBQUssRUFBRSxLQUFHLENBQUMsS0FBSzt5QkFDbkIsQ0FBQzs2QkFFRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQW5CLHdCQUFtQjt3QkFDWixxQkFBTSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQTs0QkFBdEMsc0JBQU8sU0FBK0IsRUFBQzs7d0JBR3JDLFlBQVksR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7NkJBQzdELENBQUEsWUFBWSxLQUFLLFNBQVMsSUFBSSxZQUFZLEdBQUcsY0FBYyxDQUFBLEVBQTNELHdCQUEyRDt3QkFDcEQscUJBQU0scUJBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUE7NEJBQXRDLHNCQUFPLFNBQStCLEVBQUM7Ozs7OztLQUdsRDtJQUVjLHNCQUFnQixHQUEvQjtRQUNJLElBQUksT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBRXRCLElBQU0sS0FBSyxHQUFHLFdBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO1lBQ2QsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDL0UsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVELHlCQUF5QjtJQUN6QiwyRUFBMkU7SUFDN0QsZUFBUyxHQUF2QjtRQUFBLGlCQWlCQztRQWhCRyxJQUFNLE1BQU0sR0FBRztZQUNYLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUTtZQUM5QixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLGVBQWUsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQztTQUMxQixDQUFDO1FBRUYsT0FBTyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRTthQUN0QyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNmLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDN0M7UUFDTCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRWEsd0JBQWtCLEdBQWhDO1FBQ0ksSUFBTSxNQUFNLEdBQUc7WUFDWCxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7WUFDOUIsY0FBYyxFQUFFO2dCQUNaLDZCQUE2QjtnQkFDN0IsdUNBQXVDO2dCQUN2QyxvQ0FBb0M7YUFDdkM7U0FDSixDQUFDO1FBRUYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsTUFBTTtnQkFDdkMsSUFBSSxHQUFHLEVBQUU7b0JBQ0wsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQWpIRCxJQWlIQztBQWpIWSxzQkFBSyJ9