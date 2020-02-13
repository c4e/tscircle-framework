import { CrudController, CustomRoute } from "../../../../http/controllers/crudController";
import { EmailRepository } from "../repositories/emailRepository";
export declare class EmailSpecialController extends CrudController {
    repository: EmailRepository;
    constructor();
    get customRoutes(): CustomRoute[];
}
