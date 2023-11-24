import { TaskEntity } from "../entities/task.entity";
import { InfoCreateTask } from "../interfaces/interfaces";

export abstract class TasksDatasource {
    abstract createTask(infoCreateTask: InfoCreateTask): Promise<TaskEntity>;
    abstract getTasks(id: string): Promise<TaskEntity[]>;
    abstract getTaskById(taskId: string, userId: string): Promise<TaskEntity>;
    abstract updateTask(taskId: string, userId: string, payload: InfoCreateTask): Promise<TaskEntity>;
    abstract completedTask(taskId: string, userId: string): Promise<TaskEntity>;
    abstract deleteTask(taskId: string, userId: string): Promise<TaskEntity>;
}