import { BaseController } from "./baseController";
import { BaseRepository } from "../../repository/baseRepository";
import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import * as middy from "middy";
export interface CustomRoute {
    route: string;
    httpMethod: string;
    method(event: APIGatewayEvent): Promise<APIGatewayProxyResult>;
}
export declare class CrudController extends BaseController {
    collectionHandlers: object;
    event: APIGatewayEvent;
    itemHandlers: object;
    essence: BaseRepository;
    customRoutes?: CustomRoute[] | undefined;
    onStoreValidationSchema: object;
    onUpdateValidationSchema: object;
    constructor(essence: BaseRepository);
    setupRestHandler(): middy.Middy<import("aws-lambda").APIGatewayProxyEvent, APIGatewayProxyResult, Context>;
    setupAPIHandler(): void;
    index: () => Promise<APIGatewayProxyResult | undefined>;
    show: () => Promise<APIGatewayProxyResult | undefined>;
    store: () => Promise<APIGatewayProxyResult | undefined>;
    update: () => Promise<APIGatewayProxyResult | undefined>;
    remove: () => Promise<APIGatewayProxyResult | undefined>;
    custom: (method: (event: import("aws-lambda").APIGatewayProxyEvent) => any) => Promise<any>;
}
