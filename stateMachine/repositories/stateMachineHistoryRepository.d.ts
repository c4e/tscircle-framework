import { BaseRepository } from "../../repository/baseRepository";
import { StateMachineModeHistoryModel } from "../models/stateMachineHistoryModel";
import { State } from "xstate";
export declare class StateMachineHistoryRepository extends BaseRepository {
    model: typeof StateMachineModeHistoryModel;
    addMachineHistory(stateMachineId: number, state: State<any, any, any>): Promise<any>;
}
