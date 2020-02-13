import { BaseModel } from "../../../../model/baseModel";
export interface EmailContentInterface {
    id: number;
    name: string;
}
export declare class EmailContent extends BaseModel {
    static tableName: string;
    static parentIdColumn: string;
}
