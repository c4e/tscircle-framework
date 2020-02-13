"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jwt = require("jsonwebtoken");
var cache_1 = require("../cache/cache");
var crypto = require("crypto");
var request = require("es6-request");
var JwksRsa = require("jwks-rsa");
var config_1 = require("../config/config");
var config = config_1.default('auth');
var JwtAuth = /** @class */ (function () {
    function JwtAuth(userProvider) {
        var _this = this;
        this.defaultError = {
            error: { Message: "invalid token" },
            status: 401
        };
        this.authenticate = function (req) {
            var token = req.headers.authorization;
            try {
                var tokenHash = crypto.createHash('md5').update(token).digest("hex");
                return cache_1.Cache.remember(tokenHash, 60 * 30, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.handleAuthentication(req)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                }); });
            }
            catch (error) {
                return Promise.reject(_this.defaultError);
            }
        };
        this.handleAuthentication = function (req) {
            return new Promise(function (resolve, reject) {
                try {
                    var jwkClient = JwksRsa({
                        cache: false,
                        strictSsl: true,
                        jwksUri: config.jwks_url
                    });
                    if (!req.headers.authorization) {
                        reject(_this.defaultError);
                    }
                    var tokenValue_1 = req.headers.authorization.split(" ")[1];
                    try {
                        jwt.decode(tokenValue_1, { complete: true });
                    }
                    catch (e) {
                        reject(_this.defaultError);
                    }
                    var kid = _this.getKid(jwt.decode(tokenValue_1, { complete: true }));
                    jwkClient.getSigningKey(kid, function (error, key) {
                        if (key === undefined || error) {
                            reject(_this.defaultError);
                        }
                        var signingKey = key.publicKey || key.rsaPublicKey;
                        _this.verifyJwt(tokenValue_1, signingKey)
                            .then(function () {
                            return _this.getUserInfo(tokenValue_1);
                        })
                            .then(function (user) {
                            resolve(user);
                        })
                            .catch(function (error) {
                            reject(error);
                        });
                    });
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        this.getKid = function (decodedToken) {
            try {
                var kid = decodedToken.header.kid;
                return kid;
            }
            catch (err) {
                throw _this.defaultError;
            }
        };
        this.verifyJwt = function (token, signingKey) {
            return new Promise(function (resolve, reject) {
                jwt.verify(token, signingKey, { algorithm: config.alg }, function (err, decoded) {
                    if (err) {
                        reject(_this.defaultError);
                    }
                    else {
                        resolve(decoded);
                    }
                });
            });
        };
        this.getUserInfo = function (token) {
            var options = {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            };
            return request.get(config.issuer + 'userinfo', options)
                .then(function (_a) {
                var body = _a[0], res = _a[1];
                if (_this.userProvider) {
                    return _this.userProvider.getUser(JSON.parse(body.toString()));
                }
            });
        };
        this.userProvider = userProvider;
    }
    return JwtAuth;
}());
exports.JwtAuth = JwtAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0QXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2F1dGgvand0QXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsd0NBQXFDO0FBQ3JDLCtCQUFpQztBQUNqQyxxQ0FBc0M7QUFDdEMsa0NBQXFDO0FBSXJDLDJDQUF5QztBQUN6QyxJQUFNLE1BQU0sR0FBRyxnQkFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBR2pDO0lBU0ksaUJBQVksWUFBd0M7UUFBcEQsaUJBRUM7UUFQRCxpQkFBWSxHQUFHO1lBQ1gsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBQztZQUNqQyxNQUFNLEVBQUUsR0FBRztTQUNkLENBQUM7UUFNSyxpQkFBWSxHQUFHLFVBQUMsR0FBRztZQUN0QixJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUN4QyxJQUFJO2dCQUNBLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFOzs7b0NBQy9CLHFCQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBQTtvQ0FBM0Msc0JBQU8sU0FBb0MsRUFBQzs7O3FCQUMvQyxDQUFDLENBQUM7YUFDTjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDNUM7UUFDTCxDQUFDLENBQUM7UUFFSyx5QkFBb0IsR0FBRyxVQUFDLEdBQUc7WUFDOUIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFD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