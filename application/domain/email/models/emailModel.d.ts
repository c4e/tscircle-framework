import { BaseModel } from "../../../../model/baseModel";
import { EmailType } from './emailTypeModel';
export interface EmailInterface {
    id?: number;
    name: string;
}
export declare class Email extends BaseModel {
    static tableName: string;
    static parentIdColumn: string;
    static parentModel: typeof EmailType;
    static parentTakeOverColumns: {
        source: string;
        target: string;
    }[];
}
