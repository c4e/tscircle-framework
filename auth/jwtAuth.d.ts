import { AuthProviderInterface } from "./authProviderInterface";
import { AuthUserProviderInterface } from './authUserProviderInterface';
export declare class JwtAuth implements AuthProviderInterface {
    userProvider?: AuthUserProviderInterface;
    defaultError: {
        error: {
            Message: string;
        };
        status: number;
    };
    constructor(userProvider?: AuthUserProviderInterface);
    authenticate: (req: any) => Promise<any>;
    handleAuthentication: (req: any) => Promise<unknown>;
    private getKid;
    private verifyJwt;
    private getUserInfo;
}
