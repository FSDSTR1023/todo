import { Request, Response } from "express";
import { TasksRepository } from "../../domain/repositories/tasks.repository";

export class TasksControllers {

    private readonly repository: TasksRepository;

    constructor(repository: TasksRepository) {
        this.repository = repository;
    }

    public createTask = async (req: Request, res: Response) => {

        try {
            const id = req.locals.id;
            const { description, status, title, dateStart, dateEnd } = req.body;

            const newTask = await this.repository.createTask({ description, status, title, user: id, dateEnd, dateStart });

            res.status(201).json({
                ok: true,
                msn: `Task ${newTask.id} created`,
                count: 1,
                tasks: [newTask]
            })
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }
    }

    public getTasks = async (req: Request, res: Response) => {

        try {
            const id = req.locals.id;

            const tasksResponse = await this.repository.getTasks(id);

            res.status(200).json({
                ok: true,
                msn: "All your tasks",
                count: tasksResponse.length,
                tasks: tasksResponse
            });
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }
    }

    public getTaskById = async (req: Request, res: Response) => {

        try {
            const id = req.locals.id;
            const params = req.params

            const tasks = await this.repository.getTaskById(params.id, id);

            res.status(200).json({
                ok: true,
                msn: `Task ${params.id}`,
                count: 1,
                tasks: [tasks]
            });
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }
    }

    public updateTask = async (req: Request, res: Response) => {

        try {
            const id = req.locals.id;
            const params = req.params;
            const body = req.body;

            const tasks = await this.repository.updateTask(params.id, id, body);

            res.status(200).json({
                ok: true,
                msn: `Task ${params.id}`,
                count: 1,
                tasks: [tasks]
            });
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }
    }

    public completedTask = async (req: Request, res: Response) => {

        try {
            const id = req.locals.id;
            const params = req.params;

            const tasks = await this.repository.completedTask(params.id, id);

            res.status(200).json({
                ok: true,
                msn: `Task ${params.id} completed`,
                count: 1,
                tasks: [tasks]
            });
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }
    }

    public deleteTask = async (req: Request, res: Response) => {

        try {
            const id = req.locals.id;
            const params = req.params;

            const tasks = await this.repository.deleteTask(params.id, id);

            res.status(200).json({
                ok: true,
                msn: `Task ${params.id} deleted`,
                count: 1,
                tasks: [tasks]
            });
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }
    }
}