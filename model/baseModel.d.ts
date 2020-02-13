export declare abstract class BaseModel {
    static primaryIdColumn: string;
    static parentIdColumn: string;
    static tableName: string;
    static parentModel?: BaseModel;
    static parentTakeOverColumns?: {
        source: string;
        target: string;
    }[];
    static q(): import("knex").QueryBuilder<any, {
        _base: any;
        _hasSelection: false;
        _keys: never;
        _aliases: {};
        _single: false;
        _intersectProps: {};
        _unionProps: never;
    }[]>;
    static find(id: number): import("knex").QueryBuilder<any, {
        _base: any;
        _hasSelection: false;
        _keys: never;
        _aliases: {};
        _single: false;
        _intersectProps: {};
        _unionProps: undefined;
    }>;
    static update(id: number, data: object): import("knex").QueryBuilder<any, number>;
    static create(data: object): Promise<any>;
    static delete(id: number): import("knex").QueryBuilder<any, number>;
    static updateOrCreate(lookup: object, insert: object): Promise<any>;
}
