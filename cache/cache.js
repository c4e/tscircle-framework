"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AWS = require('aws-sdk');
var config_1 = require("../config/config");
var config = config_1.default('cache');
var currentConf = config[config.default];
AWS.config.update({
    region: currentConf.region,
    endpoint: currentConf.endpoint
});
var docClient = new AWS.DynamoDB.DocumentClient();
var Cache = /** @class */ (function () {
    function Cache() {
    }
    Cache.remember = function (name, ttlInSeconds, callback) {
        var _this = this;
        return this.get(name)
            .then(function (data) {
            if (data) {
                return data;
            }
            return callback().then(function (newData) {
                return _this.put(name, ttlInSeconds, newData)
                    .then(function () {
                    return newData;
                });
            });
        })
            .catch(function (err) {
            console.log('DynamoDB error', err);
        });
    };
    Cache.get = function (name) {
        var _this = this;
        var params = {
            TableName: this.tableName,
            Key: { 'key': this.generateKey(name) }
        };
        return docClient.get(params).promise()
            .then(function (data) {
            if (data.Item && data.Item.value &&
                data.Item.ttl > _this.getUnixTime(0)) {
                return data.Item.value;
            }
        });
    };
    Cache.put = function (name, ttlInSeconds, value) {
        var params = {
            TableName: this.tableName,
            Item: {
                'key': this.generateKey(name),
                'value': value,
                'ttl': this.getUnixTime(ttlInSeconds)
            }
        };
        return docClient.put(params, value)
            .promise();
    };
    Cache.remove = function (name) {
        var params = {
            TableName: this.tableName,
            Key: { 'key': this.generateKey(name) }
        };
        return docClient.delete(params).promise();
    };
    Cache.getUnixTime = function (seconds) {
        return Math.floor(Date.now() / 1000) + seconds;
    };
    Cache.generateKey = function (name) {
        return this.keyPrefix + name;
    };
    Cache.tableName = currentConf.tableName;
    Cache.keyPrefix = 'cache-';
    return Cache;
}());
exports.Cache = Cache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jYWNoZS9jYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUU3QiwyQ0FBeUM7QUFDekMsSUFBTSxNQUFNLEdBQUcsZ0JBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUVsQyxJQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2QsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNO0lBQzFCLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUTtDQUNqQyxDQUFDLENBQUM7QUFFSCxJQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFcEQ7SUFBQTtJQXNFQSxDQUFDO0lBakVpQixjQUFRLEdBQXRCLFVBQXVCLElBQVksRUFBRSxZQUFvQixFQUFFLFFBQTRCO1FBQXZGLGlCQWtCQztRQWpCRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxJQUFJLElBQUksRUFBRTtnQkFDTixPQUFPLElBQUksQ0FBQzthQUNmO1lBRUQsT0FBTyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFPO2dCQUMzQixPQUFPLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUM7cUJBQ3ZDLElBQUksQ0FBQztvQkFDRixPQUFPLE9BQU8sQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVhLFNBQUcsR0FBakIsVUFBa0IsSUFBSTtRQUF0QixpQkFhQztRQVpHLElBQU0sTUFBTSxHQUFHO1lBQ1gsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEdBQUcsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDO1NBQ3ZDLENBQUM7UUFFRixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFO2FBQ2pDLElBQUksQ0FBQyxVQUFDLElBQUk7WUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRWEsU0FBRyxHQUFqQixVQUFrQixJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUs7UUFDdkMsSUFBTSxNQUFNLEdBQUc7WUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSSxFQUFFO2dCQUNGLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDN0IsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO2FBQ3hDO1NBQ0osQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDO2FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFYSxZQUFNLEdBQXBCLFVBQXFCLElBQUk7UUFDckIsSUFBTSxNQUFNLEdBQUc7WUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsR0FBRyxFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUM7U0FDdkMsQ0FBQztRQUVGLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRWdCLGlCQUFXLEdBQTVCLFVBQTZCLE9BQWU7UUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDbkQsQ0FBQztJQUVjLGlCQUFXLEdBQTFCLFVBQTJCLElBQVk7UUFDbkMsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBbkVjLGVBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO0lBQ2xDLGVBQVMsR0FBRyxRQUFRLENBQUM7SUFtRXhDLFlBQUM7Q0FBQSxBQXRFRCxJQXNFQztBQXRFWSxzQkFBSyJ9