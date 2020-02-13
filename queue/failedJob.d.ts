import { BaseModel } from "../model/baseModel";
export interface FailedJobInterface {
    id: number;
    name: string;
    payload: string;
    error: string;
}
export declare class FailedJob extends BaseModel {
    static tableName: string;
}
