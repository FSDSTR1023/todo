import { TaskSchema } from "../../db/mongo/models/task.Schema";
import { UserSchema } from "../../db/mongo/models/userSchema";
import { TasksDatasource } from "../../domain/datasources/tasks.datasource";
import { TaskEntity } from "../../domain/entities/task.entity";
import { InfoCreateTask, Status } from "../../domain/interfaces/interfaces";
import { TaskMapper } from "../mappers/task.mapper";

export class MongoTaskDatasourceImpl extends TasksDatasource {

    async createTask(infoCreateTask: InfoCreateTask): Promise<TaskEntity> {

        const task = await TaskSchema.create(infoCreateTask);
        if (!task) throw Error('MongoTaskDatasourceImpl.createTask: we couldn\'t create the task');

        const user = await UserSchema.findByIdAndUpdate(infoCreateTask.user, { $push: { tasks: task.id } });
        if (!user) throw new Error('MongoTaskDatasourceImpl.createTask: We couldn\'t join user and task');

        return TaskMapper.fromObject(task);
    }

    async getTasks(userId: string): Promise<TaskEntity[]> {

        const tasks = await TaskSchema.find({ user: userId, deletedAt: undefined });

        return tasks.map(t => TaskMapper.fromObject(t));
    }

    async getTaskById(taskId: string, userId: string): Promise<TaskEntity> {

        const tasks = await TaskSchema.findOne({ _id: taskId, user: userId });
        if (!tasks) throw new Error('MongoTaskDatasourceImpl.getTaskById: we didn\'t find task')

        return TaskMapper.fromObject(tasks);

    }

    async updateTask(taskId: string, userId: string, payload: InfoCreateTask): Promise<TaskEntity> {

        const { id, createdAt, user, modifiedAt, status, deletedAt, ...changesTask } = TaskMapper.fromObject(payload)

        await TaskSchema.findOneAndUpdate({ _id: taskId, user: userId }, { modifiedAt: Date.now(), ...changesTask });

        const task = await TaskSchema.findOne({ _id: taskId, user: userId });
        if (!task) throw new Error('MongoTaskDatasourceImpl.updateTask: task wasn\'t created');

        return TaskMapper.fromObject(task);
    }

    async completedTask(taskId: string, userId: string): Promise<TaskEntity> {

        await TaskSchema.findOneAndUpdate({ _id: taskId, user: userId }, { status: Status.COMPLETED });

        const task = await TaskSchema.findOne({ _id: taskId, user: userId });
        if (!task) throw new Error('MongoTaskDatasourceImpl.completedTask: task wasn\'t created');

        return TaskMapper.fromObject(task);
    }

    async deleteTask(taskId: string, userId: string): Promise<TaskEntity> {

        await TaskSchema.findOneAndUpdate({ _id: taskId, user: userId }, { deletedAt: Date.now() });

        const task = await TaskSchema.findOne({ _id: taskId, user: userId });
        if (!task) throw new Error('MongoTaskDatasourceImpl.deleteTask: task wasn\'t created');

        return TaskMapper.fromObject(task);
    }
}