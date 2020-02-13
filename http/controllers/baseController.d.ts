import { AuthProviderInterface } from "../../auth/authProviderInterface";
import { middlewareInterface } from "../middlewares/middlewareInterface";
import { APIGatewayProxyResult } from "aws-lambda";
export interface ControllerException {
    status?: number;
    statusCode?: number;
    Message?: string;
    message?: string;
    error?: any;
}
export interface Headers {
    [header: string]: boolean | number | string;
}
export declare class BaseController {
    authenticatedUser?: Object;
    middlewares?: Array<middlewareInterface>;
    authProvider?: AuthProviderInterface;
    validationSchema?: Object;
    prerequisites: (req: any) => Promise<any[]>;
    authenticate: (req: any) => Promise<unknown>;
    checkMiddlewares: (req: any, authenticatedUser: any) => Promise<any[]>;
    validate: (data: any, schema: any) => any;
    handleError(errorController: ControllerException): void;
    handleResponse(statusCode: number, response: any, headers?: Headers): APIGatewayProxyResult;
}
