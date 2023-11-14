import type { Request, Response } from 'express';
import { UsersRepositoryImpl } from '../../infrastructure/repositories/users.repository.impl';
import { UsersDatasourceImpl } from '../../infrastructure/datasources/users.datasource.impl';
import { UsersRepository } from '../../domain/repositories/users.repository';

export class UsersControllers {

    private readonly usersRerpository: UsersRepository;

    constructor(usersRerpository: UsersRepository) {
        this.usersRerpository = usersRerpository;
    }

    public createUser = async (req: Request, res: Response) => {
        const newUser = await this.usersRerpository.createUser({
            name: "Jordi",
            surname: "Galobart",
            email: "jordi@mail.com",
            password: "1234",
        });

        res.status(201).json({
            ok: true,
            msn: "User created",
            newUser
        })
    }
}