export declare class Queue {
    static dispatch(jobClass: any): any;
    static handleMessages(messages: any): Promise<any[]>;
    private static handleMessage;
    private static getAllJobClasses;
    static fetchJobs(): any;
    static getQueueAttributes(): Promise<Object>;
}
