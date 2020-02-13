import { MachineConfig, MachineOptions, State, Interpreter, StateValue } from 'xstate';
import { StateMachineRepository } from "./repositories/stateMachineRepository";
import { StateMachineHistoryRepository } from "./repositories/stateMachineHistoryRepository";
export default abstract class stateMachine {
    protected abstract config: MachineConfig<any, any, any>;
    protected abstract options: MachineOptions<any, any>;
    protected smRepository: StateMachineRepository;
    protected smHistoryRepository: StateMachineHistoryRepository;
    protected id: number;
    protected sm: any;
    protected smInstance: any;
    state: State<any>;
    service: Interpreter<any>;
    create(context: Object): Promise<any>;
    getId(): number;
    getStatus(): StateValue;
    load(id: number): Promise<void>;
    transition(event: string): Promise<void>;
    protected store(): Promise<void>;
}
