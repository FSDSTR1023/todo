import type { Request, Response } from 'express';
import { UsersRepository } from '../../domain/repositories/users.repository';
import { JwtAdapter } from '../../config/jwt.adapter';

export class UsersControllers {

    private readonly usersRepository: UsersRepository;

    // Hago una inyección de dependencias directamente desde el Domain y no desde infrastructure (implementación) por si en algún momento quiero cambiar la base de datos, por ejempolo.
    constructor(usersRerpository: UsersRepository) {
        this.usersRepository = usersRerpository;
    }

    public create = async (req: Request, res: Response) => {

        // todo: implementar validaciones para asegurarme que en este punto tengo la info correcta en el body
        const { name, surname, email, password } = req.body;

        // Refactorizar a auth.services
        const { password: passwordResponse, ...userResponse } = await this.usersRepository.createUser({
            name,
            surname,
            email,
            password,
        });

        const payload = {
            id: userResponse.id,
            email: userResponse.email
        }

        const token = JwtAdapter.genToken(payload, '8h')

        res.status(201).json({
            ok: true,
            msn: "User created",
            user: userResponse,
            token
        })
    }

    public getInfo = async (req: Request, res: Response) => {

        // todo: implementar validaciones para asegurarme que en este punto tengo la info correcta en el body
        const token = req.header('token');

        console.log({ token })

        res.status(200).json({
            token,
        })
    }
}