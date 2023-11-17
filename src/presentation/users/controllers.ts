import type { Request, Response } from 'express';
import { UsersRepository } from '../../domain/repositories/users.repository';
import { JwtAdapter } from '../../config/jwt.adapter';
import { envs } from '../../config/envs';
import { Secret } from 'jsonwebtoken';

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

        // Añadir como inyección de dependencias en la clase de auth.Services
        const jwt = new JwtAdapter()
        const token = jwt.genToken(payload, '8h');

        res.status(201).json({
            ok: true,
            msn: "User created",
            user: userResponse,
            token
        })
    }

    public getInfo = async (req: Request, res: Response) => {

        // todo: antes de llegar aquí validar si me están enviando un jwt
        // todo: implementar validaciones para asegurarme que en este punto tengo la info correcta en el body
        const token = req.header('token');
        const jwt = new JwtAdapter();

        const isCorrectJwt = jwt.verifyToken(token!);

        if (!isCorrectJwt) {
            return res.status(403).json({
                ok: false,
                msg: "Unauthorizated"
            });
        }

        const user = await this.usersRepository.getUser(isCorrectJwt.id)

        console.log({ token })

        res.status(200).json({
            ok: true,
            msg: "Your info",
            user
        })
    }
}