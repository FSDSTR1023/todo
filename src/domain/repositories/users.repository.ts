import { UserEntity } from '../entities/user.entity';
import { InfoCreateUser, LoginProps } from '../interfaces/interfaces';

export abstract class UsersRepository {

    abstract createUser(userInfo: InfoCreateUser): Promise<UserEntity>;
    abstract getUser(): Promise<UserEntity>;
    abstract userLogin(loginProps: LoginProps): Promise<UserEntity>;

}