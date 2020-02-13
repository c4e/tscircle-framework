import { jobInterface } from '../../queue/jobInterface';
export declare class failingJob implements jobInterface {
    myObj: any;
    constructor(myObj: any);
    handle(): Promise<void>;
}
