import { TasksDatasource } from "../../domain/datasources/tasks.datasource";
import { TaskEntity } from "../../domain/entities/task.entity";
import { InfoCreateTask } from "../../domain/interfaces/interfaces";
import { TasksRepository } from "../../domain/repositories/tasks.repository";

export class TasksRepositoryImpl extends TasksRepository {

    private readonly datasource: TasksDatasource;

    constructor(datasource: TasksDatasource) {
        super();
        this.datasource = datasource;
    }

    createTask(infoCreateTask: InfoCreateTask): Promise<TaskEntity> {
        return this.datasource.createTask(infoCreateTask);
    }
    getTasks(id: string): Promise<TaskEntity[]> {
        return this.datasource.getTasks(id);
    }
    getTaskById(taskId: string, userId: string): Promise<TaskEntity> {
        return this.datasource.getTaskById(taskId, userId);
    }
    updateTask(taskId: string, userId: string, payload: InfoCreateTask): Promise<TaskEntity> {
        return this.datasource.updateTask(taskId, userId, payload);
    }
    completedTask(taskId: string, userId: string): Promise<TaskEntity> {
        return this.datasource.completedTask(taskId, userId);
    }
    deleteTask(taskId: string, userId: string): Promise<TaskEntity> {
        return this.datasource.deleteTask(taskId, userId);
    }

}