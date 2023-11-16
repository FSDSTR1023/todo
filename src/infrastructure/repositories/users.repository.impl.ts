import { UsersDatasource } from "../../domain/datasources/users.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { InfoCreateUser, LoginProps } from "../../domain/interfaces/interfaces";
import { UsersRepository } from "../../domain/repositories/users.repository";

export class UsersRepositoryImpl extends UsersRepository {

    private readonly datasource: UsersDatasource;

    constructor(datasource: UsersDatasource) {
        super()
        this.datasource = datasource;
    }

    createUser(userInfo: InfoCreateUser): Promise<UserEntity> {
        return this.datasource.createUser(userInfo)
    }
    getUser(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    userLogin(loginProps: LoginProps): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}