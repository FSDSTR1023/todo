import { TaskEntity } from "../entities/task.entity";
import { InfoCreateTask } from "../interfaces/interfaces";

export abstract class TasksDatasource {
    abstract createTask(infoCreateTask: InfoCreateTask): Promise<TaskEntity>;
    abstract getTasks(): Promise<TaskEntity[]>;
    abstract getTaskById(id: string): Promise<TaskEntity>;
    abstract updateTask(id: string): Promise<TaskEntity>;
    abstract editTask(id: string): Promise<TaskEntity>;
}