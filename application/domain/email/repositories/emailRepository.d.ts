import { BaseRepository } from "../../../../repository/baseRepository";
import { Email } from "../models/emailModel";
import { APIGatewayProxyResult } from "aws-lambda";
export declare class EmailRepository extends BaseRepository {
    model: typeof Email;
    getEmailsByTeamId: (event: import("aws-lambda").APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>;
    uploadFile: (event: import("aws-lambda").APIGatewayProxyEvent) => Promise<APIGatewayProxyResult>;
}
