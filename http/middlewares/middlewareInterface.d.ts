export interface middlewareInterface {
    next(req: any, authenticatedUser: any): any;
}
