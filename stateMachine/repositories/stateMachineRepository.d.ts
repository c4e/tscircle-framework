import { BaseRepository } from "../../repository/baseRepository";
import { StateMachineModel } from "../models/stateMachineModel";
import { State } from "xstate";
export declare class StateMachineRepository extends BaseRepository {
    model: typeof StateMachineModel;
    addMachine(stateMachineClass: string, state: State<any, any, any>): Promise<any>;
    editStateMachine(stateMachineId: number, state: State<any, any, any>): Promise<any>;
}
