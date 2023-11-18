import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { UserSchema } from "../../db/mongo/models/userSchema";
import { UsersDatasource } from "../../domain/datasources/users.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { InfoCreateUser, LoginProps } from "../../domain/interfaces/interfaces";
import { UserMapper } from "../mappers/user.mapper";

export class MongoUserDatasourceImpl extends UsersDatasource {
    async createUser(userInfo: InfoCreateUser): Promise<UserEntity> {
        const newUser = await UserSchema.create(userInfo);
        newUser.password = BcryptAdapter.toHash(newUser.password);
        await newUser.save();
        const newUserEntity = UserMapper.fromObject(newUser);
        return newUserEntity;
    }
    async getUser(id: string): Promise<UserEntity> {

        const user = await UserSchema.findById(id);
        if (!user) {
            throw new Error('getUser: No hay usuario');
        }

        const userEntity = UserMapper.fromObject(user);

        return userEntity;

    }

    async userLogin(loginProps: LoginProps): Promise<UserEntity> {

        const { email, password } = loginProps;

        //! Ya que estoy seguro que el usuario existe, autentifico al usuario en auth.services

        const user = await UserSchema.findOne({ email });
        if (!user) throw Error('MongoUserDatasourceImpl.userLogin: Usuario o contraseña no válidos');

        //! validar la contraseña
        const isValidatedPasword = BcryptAdapter.compare(password, user.password)
        if (!isValidatedPasword) throw Error('MongoUserDatasourceImpl.userLogin: Usuario o contraseña no válidos');
        //! hasta aquí en el auth.services

        const userEntity = UserMapper.fromObject(user);

        return userEntity;
    }

}