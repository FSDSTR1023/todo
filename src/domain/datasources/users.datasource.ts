import { UserEntity } from '../entities/user.entity';
import { InfoCreateUser, LoginProps } from '../interfaces/interfaces';

export abstract class UsersDatasource {
    abstract createUser(userInfo: InfoCreateUser): Promise<UserEntity>;
    abstract getUser(id: string): Promise<UserEntity>;
    abstract userLogin(loginProps: LoginProps): Promise<UserEntity>;
}