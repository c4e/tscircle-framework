import { BaseModel } from "../../model/baseModel";
export interface StateMachineModeHistoryModelInterface {
    id: number;
    state_machine_id: number;
    state: string;
    state_object: string;
}
export declare class StateMachineModeHistoryModel extends BaseModel {
    static tableName: string;
    static parentIdColumn: string;
}
