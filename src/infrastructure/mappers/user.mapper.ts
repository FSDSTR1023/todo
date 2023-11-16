import { UserEntity } from "../../domain/entities/user.entity";

export class UserMapper {

    static fromObject = (userJson: { [key: string]: any }): UserEntity => {

        const { _id: id, email, createdAt, modifiedAt, name, surname, password } = userJson;

        return new UserEntity({
            createdAt,
            email,
            id,
            modifiedAt,
            name,
            surname,
            password
        })

    }

}