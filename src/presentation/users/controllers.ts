import type { Request, Response } from 'express';
import { UsersRepository } from '../../domain/repositories/users.repository';

export class UsersControllers {

    private readonly usersRepository: UsersRepository;

    // Hago una inyección de dependencias directamente desde el Domain y no desde infrastructure (implementación) por si en algún momento quiero cambiar la base de datos, por ejempolo.
    constructor(usersRerpository: UsersRepository) {
        this.usersRepository = usersRerpository;
    }

    public createUser = async (req: Request, res: Response) => {

        // todo: implementar validaciones para asegurarme que en este punto tengo la info correcta en el body
        const { name, surname, email, password } = req.body;

        const newUser = await this.usersRepository.createUser({
            name,
            surname,
            email,
            password,
        });

        res.status(201).json({
            ok: true,
            msn: "User created",
            newUser
        })
    }
}