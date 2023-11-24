import { Router } from 'express'
import { UsersRoutes } from './users/routes';
import { TaskRoutes } from './tasks/routes';


export class AppRoutes {


    static get routes(): Router {

        const router = Router();

        router.use('/user', UsersRoutes.routes);
        router.use('/task', TaskRoutes.routes);

        return router;
    }


}
