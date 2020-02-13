import { jobInterface } from '../../queue/jobInterface';
export declare class myJobJob implements jobInterface {
    myObj: any;
    constructor(myObj: any);
    handle(): Promise<void>;
}
