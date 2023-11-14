interface Props {
    name: string,
    surname: string,
    email: string,
    password: string,
    id: string;
    createdAt: EpochTimeStamp,
    modifiedAt: EpochTimeStamp,
    deletedAt?: EpochTimeStamp | null,
}

export class UserEntity {

    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public id: string;
    public createdAt: EpochTimeStamp;
    public modifiedAt: EpochTimeStamp;
    public deletedAt?: EpochTimeStamp | null;

    constructor(props: Props) {
        this.validateProps(props);

        const {
            id,
            name,
            surname,
            email,
            password,
            createdAt,
            modifiedAt
        } = props;

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    validateProps(props: Props) {
        const {
            id,
            name,
            surname,
            email,
            password,
            createdAt,
            modifiedAt
        } = props;

        if (
            !id
            || !name
            || !surname
            || !email
            || !password
            || !createdAt
            || !modifiedAt
        ) {
            throw Error('Create user: Not complete info')
        }
    }
}