import { Router } from 'express'
import { UsersRoutes } from './users/routes';


export class AppRoutes {


    static get routes(): Router {

        const router = Router();

        router.use('/user/create', UsersRoutes.routes);

        return router;
    }


}
