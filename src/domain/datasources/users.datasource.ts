import { UserEntity } from '../entities/user.entity';
import { infoCreateUser, LoginProps } from '../interfaces/interfaces';

export abstract class UsersDatasource {
    abstract createUser(userInfo: infoCreateUser): Promise<UserEntity>;
    abstract getUser(): Promise<UserEntity>;
    abstract userLogin(loginProps: LoginProps): Promise<UserEntity>;
}