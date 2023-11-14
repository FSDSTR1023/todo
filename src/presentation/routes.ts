import { Router } from 'express'
import { UsersRoutes } from './users/routes';
import { TaskRoutes } from './tasks/routes';


export class AppRoutes {


    static get routes(): Router {

        const router = Router();

        router.use('/users', UsersRoutes.routes);
        router.use('/tasks', TaskRoutes.routes);

        return router;
    }


}
