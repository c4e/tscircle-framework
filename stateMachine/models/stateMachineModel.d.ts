import { BaseModel } from "../../model/baseModel";
export interface StateMachineModelInterface {
    id: number;
    state: string;
    state_object: string;
    done: boolean;
}
export declare class StateMachineModel extends BaseModel {
    static tableName: string;
}
