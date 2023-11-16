import { randomUUID } from "crypto";
import { UsersDatasource } from "../../domain/datasources/users.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { InfoCreateUser, LoginProps } from "../../domain/interfaces/interfaces";



export class UsersDatasourceImpl extends UsersDatasource {

    async createUser(userInfo: InfoCreateUser): Promise<UserEntity> {

        // aquí los datos ya deben estar validados por express-validators
        const { name, surname, email, password } = userInfo;

        // devuelve el objeto creaedo
        const user = new UserEntity({
            name,
            surname,
            email,
            password,
            id: randomUUID(),
            createdAt: new Date().getTime(),
            modifiedAt: new Date().getTime(),
            deletedAt: null,
        })
        return user;
    }

    getUser(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

    userLogin(loginProps: LoginProps): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
}