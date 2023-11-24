import { Router } from "express";
import { body, header, param } from 'express-validator';
import { TasksRepositoryImpl } from "../../infrastructure/repositories/tasks.repository.impl";
import { TasksControllers } from "./controllers";
import { MongoTaskDatasourceImpl } from "../../infrastructure/datasources/mongo-task.datasource.impl";
import { statusTask } from "../validators/statusTask.validator";
import { checkValidators } from "../middlewares/checkValidators";
import { checkJWT } from "../middlewares/checkJWT";
import { idTaskValidator } from "../validators/idTask.validator";

export class TaskRoutes {
    static get routes(): Router {
        const route = Router();

        const datasource = new MongoTaskDatasourceImpl();
        const repository = new TasksRepositoryImpl(datasource);

        const tasksControllers = new TasksControllers(repository);

        route.post('/', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            body('title').notEmpty().isString().trim(),
            body('description').optional().isString().trim(),
            body('status').optional().isString().custom(statusTask),
            body('dateStart').optional().isDate(),
            body('dateEnd').optional().isDate(),
            checkValidators,
        ], tasksControllers.createTask);

        route.get('/', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            checkValidators,
        ], tasksControllers.getTasks);

        route.get('/:id', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            param('id', 'Invalid task ID').isMongoId().custom(idTaskValidator),
            checkValidators,
        ], tasksControllers.getTaskById);

        route.put('/:id', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            param('id', 'Invalid task ID').isMongoId().custom(idTaskValidator),
            body('title').optional().isString().trim(),
            body('description').optional().isString().trim(),
            body('status').optional().isString().custom(statusTask),
            body('dateStart').optional().isDate(),
            body('dateEnd').optional().isDate(),
            checkValidators,
        ], tasksControllers.updateTask);

        route.patch('/:id', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            param('id', 'Invalid task ID').isMongoId().custom(idTaskValidator),
            checkValidators,
        ], tasksControllers.completedTask);

        route.delete('/:id', [
            header('token', 'Invalid token').notEmpty().isJWT(),
            checkJWT,
            param('id', 'Invalid task ID').isMongoId().custom(idTaskValidator),
            checkValidators,
        ], tasksControllers.deleteTask);

        return route;
    }
}