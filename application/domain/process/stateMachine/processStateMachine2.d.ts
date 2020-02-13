import stateMachine from '../../../../stateMachine/stateMachine';
import { MachineConfig } from "xstate";
export interface ProcessContext {
    amount: number;
    type: string;
}
export declare class processStateMachine2 extends stateMachine {
    create(context: ProcessContext): Promise<any>;
    protected options: any;
    protected config: MachineConfig<ProcessContext, any, any>;
}
