import { Router } from "express";
import { body, header } from "express-validator";
import { UsersControllers } from "./controllers";
import { UsersRepositoryImpl } from "../../infrastructure/repositories/users.repository.impl";
import { MongoUserDatasourceImpl } from "../../infrastructure/datasources/mongo-user.datasource.impl";
import { checkValidators } from "../middlewares/checkValidators";
import { checkJWT } from "../middlewares/checkJWT";
import { existEmail, notExistEmail } from "../validators/checkEmail.validator";

export class UsersRoutes {
    static get routes(): Router {
        const router = Router();

        // Aquí hago la inyección de dependencias, estoy especificando qué implementación usar, puedo usar más de una. Por eso llamo las clases de infrastructure y no del Domain.
        const datasource = new MongoUserDatasourceImpl();
        const repository = new UsersRepositoryImpl(datasource);

        const usersControllers = new UsersControllers(repository);

        router.post('/', [
            body('name', 'You must enter your name').notEmpty().isString().trim(),
            body('surname', 'You must enter your surname').notEmpty().isString().trim(),
            body('email', 'You must enter a valid email').notEmpty().isEmail().trim().custom(notExistEmail),
            body('password', 'Enter a password').notEmpty(),
            checkValidators,
        ], usersControllers.create)

        router.get('/', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            checkValidators,
        ], usersControllers.getInfo)

        router.get('/login', [
            body('email', 'You must enter a valid email').notEmpty().isEmail().trim().custom(existEmail),
            body('password', 'Enter a password').notEmpty(),
            checkValidators,
        ], usersControllers.login)

        return router
    }
}

