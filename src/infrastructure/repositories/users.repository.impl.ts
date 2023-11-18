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
    getUser(id: string): Promise<UserEntity> {
        return this.datasource.getUser(id);
    }
    userLogin(loginProps: LoginProps): Promise<UserEntity> {
        return this.datasource.userLogin(loginProps);
    }

}