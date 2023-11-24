import { TaskSchema } from "../../db/mongo/models/task.Schema"

export const idTaskValidator = async (value: string) => {
    const existTask = await TaskSchema.findById(value);
    if (!existTask) throw new Error('Invalid task ID');
}