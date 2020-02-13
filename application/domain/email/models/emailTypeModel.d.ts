import { BaseModel } from "../../../../model/baseModel";
export interface EmailTypeInterface {
    id: number;
    name: string;
    team_id: number;
}
export declare class EmailType extends BaseModel {
    static tableName: string;
    static parentIdColumn: string;
}
