import type { Request, Response } from 'express';
import { UsersRepository } from '../../domain/repositories/users.repository';
import { AuthService } from '../../infrastructure/services/auth.service';

export class UsersControllers {

    private readonly usersRepository: UsersRepository;

    // Hago una inyección de dependencias directamente desde el Domain y no desde infrastructure (implementación) por si en algún momento quiero cambiar la base de datos, por ejempolo.
    constructor(usersRerpository: UsersRepository) {
        this.usersRepository = usersRerpository;
    }

    public create = async (req: Request, res: Response) => {

        try {
            const { name, surname, email, password } = req.body;
            const { password: passwordResponse, ...userResponse } = await this.usersRepository.createUser({
                name,
                surname,
                email,
                password,
            });
            const payload = { id: userResponse.id }
            const token = new AuthService().newToken(payload);

            res.status(201).json({
                ok: true,
                msn: "User created",
                user: userResponse,
                token
            })
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }


    }

    public getInfo = async (req: Request, res: Response) => {
        const id = req.locals.id;

        try {
            const { password, ...userResponse } = await this.usersRepository.getUser(id);

            res.status(200).json({
                ok: true,
                msg: "Your info",
                user: userResponse
            })
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }


    }

    public login = async (req: Request, res: Response) => {
        const { email, password } = req.body;


        try {
            const { password: passwordResponse, ...userResponse } = await this.usersRepository.userLogin({ email, password });
            const payload = { id: userResponse.id }
            const token = new AuthService().newToken(payload);

            res.status(200).json({
                ok: true,
                msg: "you are logged",
                user: userResponse,
                token
            })
        } catch (error) {
            const myError = error as { name: string, message: string };

            res.status(400).json({
                ok: false,
                msn: `${myError.name}: ${myError.message}`
            });
        }

    }
}
