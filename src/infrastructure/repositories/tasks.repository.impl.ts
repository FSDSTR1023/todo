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
    getTasks(): Promise<TaskEntity[]> {
        return this.datasource.getTasks();
    }
    getTaskById(id: string): Promise<TaskEntity> {
        return this.datasource.getTaskById(id);
    }
    updateTask(id: string): Promise<TaskEntity> {
        return this.datasource.updateTask(id);
    }
    editTask(id: string): Promise<TaskEntity> {
        return this.datasource.editTask(id);
    }

}