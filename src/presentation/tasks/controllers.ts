import { Request, Response } from "express";
import { TasksRepository } from "../../domain/repositories/tasks.repository";

export class TasksControllers {

    private readonly repository: TasksRepository;

    constructor(repository: TasksRepository) {
        this.repository = repository;
    }

    public createTask = async (req: Request, res: Response) => {

        // todo: Validar antes de llegar aquí que tengo toda la info. express-validator
        const { description, status, title, user, dateStart, dateEnd } = req.body;

        const newTask = await this.repository.createTask({ description, status, title, user, dateEnd, dateStart })

        res.status(201).json({
            ok: true,
            msn: "Task created",
            newTask
        })

    }
}