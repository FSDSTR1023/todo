import { UserSchema } from "../../db/mongo/models/userSchema";
import { UsersDatasource } from "../../domain/datasources/users.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { InfoCreateUser, LoginProps } from "../../domain/interfaces/interfaces";
import { UserMapper } from "../mappers/user.mapper";

export class MongoUserDatasourceImpl extends UsersDatasource {
    async createUser(userInfo: InfoCreateUser): Promise<UserEntity> {
        const newUser = await UserSchema.create(userInfo);
        await newUser.save();
        const newUserEntity = UserMapper.fromObject(newUser);
        return newUserEntity;
    }
    getUser(): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    userLogin(loginProps: LoginProps): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }

}