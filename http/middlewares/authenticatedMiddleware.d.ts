import { middlewareInterface } from "./middlewareInterface";
export declare class AuthenticatedMiddleware implements middlewareInterface {
    defaultError: {
        error: string;
        status: number;
    };
    next: (req: any, authenticatedUser: any) => Promise<void>;
}
