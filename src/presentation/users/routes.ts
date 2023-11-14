import { Router } from "express";
import { UsersControllers } from "./controllers";
import { UsersRepository } from "../../domain/repositories/users.repository";
import { UsersDatasourceImpl } from "../../infrastructure/datasources/users.datasource.impl";
import { UsersRepositoryImpl } from "../../infrastructure/repositories/users.repository.impl";


export class UsersRoutes {



    static get routes(): Router {
        const router = Router();

        const datasource = new UsersDatasourceImpl();
        const repository = new UsersRepositoryImpl(datasource);

        const usersControllers = new UsersControllers(repository);

        router.post('/', usersControllers.createUser)
        return router
    }
}

