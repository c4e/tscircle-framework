import { APIGatewayEvent } from "aws-lambda";
export declare abstract class BaseRepository {
    model: any;
    get(id: number, parentId?: number, event?: APIGatewayEvent): Promise<any>;
    getAllByIds(parentIds: [], event?: APIGatewayEvent): Promise<any>;
    getAll(searchQuery?: string, searchColumn?: string, parentId?: number, event?: APIGatewayEvent): Promise<any>;
    add(data: object, parentId?: number, event?: APIGatewayEvent): Promise<any>;
    edit(id: number, data: object, parentId?: number, event?: APIGatewayEvent): Promise<any>;
    delete(id: number, parentId?: number, event?: APIGatewayEvent): Promise<any>;
}
