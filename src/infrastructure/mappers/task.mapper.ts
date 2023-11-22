import { TaskEntity } from "../../domain/entities/task.entity";

export class TaskMapper {

    static fromObject = (userJson: { [key: string]: any }): TaskEntity => {

        const { title,
            description,
            status,
            dateStart,
            dateEnd,
            id,
            user,
            createdAt,
            modifiedAt,
            deletedAt, } = userJson;

        return new TaskEntity({
            title,
            description,
            status,
            dateStart,
            dateEnd,
            id,
            user,
            createdAt,
            modifiedAt,
            deletedAt,
        })

    }

}