export declare class Cache {
    private static tableName;
    private static keyPrefix;
    static remember(name: string, ttlInSeconds: number, callback: () => Promise<any>): Promise<any>;
    static get(name: any): Promise<any>;
    static put(name: any, ttlInSeconds: any, value: any): any;
    static remove(name: any): any;
    protected static getUnixTime(seconds: number): number;
    private static generateKey;
}
