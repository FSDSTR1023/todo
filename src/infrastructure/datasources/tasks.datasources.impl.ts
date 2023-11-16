import { randomUUID } from "crypto";
import { TasksDatasource } from "../../domain/datasources/tasks.datasource";
import { TaskEntity } from "../../domain/entities/task.entity";
import { InfoCreateTask } from "../../domain/interfaces/interfaces";

export class TasksDatasourcesImpl extends TasksDatasource {

    async createTask(infoCreateTask: InfoCreateTask): Promise<TaskEntity> {

        const { description, status, title, user, dateStart, dateEnd } = infoCreateTask;

        const newTask = new TaskEntity(
            {
                description,
                status,
                title,
                user,
                createdAt: new Date().getTime(),
                id: randomUUID(),
                modifiedAt: new Date().getTime(),
                dateEnd,
                dateStart
            })
        return newTask;
    }

    getTasks(): Promise<TaskEntity[]> {
        throw new Error("Method not implemented.");
    }
    getTaskById(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    updateTask(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }
    editTask(id: string): Promise<TaskEntity> {
        throw new Error("Method not implemented.");
    }

}