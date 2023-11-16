import { Router } from "express";
import { TasksDatasourcesImpl } from "../../infrastructure/datasources/tasks.datasources.impl";
import { TasksRepositoryImpl } from "../../infrastructure/repositories/tasks.repository.impl";
import { TasksControllers } from "./controllers";

export class TaskRoutes {
    static get routes(): Router {
        const route = Router();

        const datasource = new TasksDatasourcesImpl();
        const repository = new TasksRepositoryImpl(datasource);

        const tasksControllers = new TasksControllers(repository);

        route.post('/', tasksControllers.createTask)
        return route;
    }
}