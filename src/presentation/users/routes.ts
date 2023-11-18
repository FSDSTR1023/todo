import { Router } from "express";
import { UsersControllers } from "./controllers";
import { UsersDatasourceImpl } from "../../infrastructure/datasources/users.datasource.impl";
import { UsersRepositoryImpl } from "../../infrastructure/repositories/users.repository.impl";
import { MongoUserDatasourceImpl } from "../../infrastructure/datasources/mongo-users.datasource.impl";

export class UsersRoutes {
    static get routes(): Router {
        const router = Router();

        // Aquí hago la inyección de dependencias, estoy especificando qué implementación usar, puedo usar más de una. Por eso llamo las clases de infrastructure y no del Domain.
        const datasource = new MongoUserDatasourceImpl();
        const repository = new UsersRepositoryImpl(datasource);

        const usersControllers = new UsersControllers(repository);

        router.post('/', usersControllers.create)
        router.get('/', usersControllers.getInfo)
        router.get('/login', usersControllers.login)
        return router
    }
}

