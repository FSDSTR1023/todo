import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { UserSchema } from "../../db/mongo/models/userSchema";
import { UsersDatasource } from "../../domain/datasources/users.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { InfoCreateUser, LoginProps } from "../../domain/interfaces/interfaces";
import { UserMapper } from "../mappers/user.mapper";
import { AuthService } from "../services/auth.service";

export class MongoUserDatasourceImpl extends UsersDatasource {

    async createUser(userInfo: InfoCreateUser): Promise<UserEntity> {
        const newUser = await UserSchema.create(userInfo);
        newUser.password = BcryptAdapter.toHash(newUser.password);
        await newUser.save();
        const newUserEntity = UserMapper.fromObject(newUser);
        return newUserEntity;
    }

    async getUser(id: string): Promise<UserEntity> {
        const user = await UserSchema.findById(id); //.populate('tasks');
        if (!user) throw new Error('getUser: No hay usuario');
        const userEntity = UserMapper.fromObject(user);
        return userEntity;
    }

    async userLogin(loginProps: LoginProps): Promise<UserEntity> {
        const { email, password } = loginProps;
        const userDB = await UserSchema.findOne({ email });
        if (!userDB) throw Error('AuthService.userLogin: User or password isn\'t valid');
        const userLogged = new AuthService().login(password, userDB.password);
        if (!userLogged) throw Error('AuthService.userLogin: User or password isn\'t valid');
        const userEntity = UserMapper.fromObject(userDB);
        return userEntity;
    }

}