import stateMachine from '../../../../stateMachine/stateMachine';
import { MachineConfig, MachineOptions } from "xstate";
export interface ProcessContext {
    id?: number | null;
    amount: number;
    type: string;
}
export declare class processStateMachine3 extends stateMachine {
    protected config: MachineConfig<ProcessContext, any, any>;
    protected options: MachineOptions<ProcessContext, any>;
    constructor(context: ProcessContext);
}
