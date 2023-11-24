import { TaskEntity } from "./task.entity";

interface Props {
    name: string,
    surname: string,
    email: string,
    password: string,
    id: string;
    createdAt: Date,
    modifiedAt: Date,
    deletedAt?: Date,
    tasks?: TaskEntity[]
}

export class UserEntity {

    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public id: string;
    public createdAt: Date;
    public modifiedAt: Date;
    public deletedAt?: Date;
    public tasks?: TaskEntity[];

    constructor(props: Props) {
        this.validateProps(props);

        const {
            id,
            name,
            surname,
            email,
            password,
            createdAt,
            modifiedAt,
            deletedAt,
            tasks
        } = props;

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deletedAt = deletedAt;
        this.tasks = tasks;
    }

    validateProps(props: Props) {
        const {
            id,
            name,
            surname,
            email,
            password,
            createdAt,
            modifiedAt,
            tasks
        } = props;

        if (
            !id
            || !name
            || !surname
            || !email
            || !password
            || !createdAt
            || !modifiedAt
            || !tasks
        ) {
            throw Error('Create user: Not complete info')
        }
    }
}