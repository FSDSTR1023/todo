import { UserEntity } from "./user.entity";

enum Status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN PROGRESS",
    COMPLETED = "COMPLETED",
}

interface Props {
    title: string;
    description: string;
    status: Status;
    dateStart: EpochTimeStamp;
    dateEnd: EpochTimeStamp;
    id: string;
    user: UserEntity;
    createdAt: EpochTimeStamp;
    modifiedAt: EpochTimeStamp;
    deletedAt?: EpochTimeStamp | null;
};

export class TaskEntity {

    public title: string;
    public description: string;
    public status: Status;
    public dateStart: EpochTimeStamp;
    public dateEnd: EpochTimeStamp;
    public id: string;
    public user: UserEntity;
    public createdAt: EpochTimeStamp;
    public modifiedAt: EpochTimeStamp;
    public deletedAt?: EpochTimeStamp | null;

    constructor(props: Props) {
        this.validateProps(props);

        const {
            title,
            description,
            status,
            dateStart,
            dateEnd,
            id,
            user,
            createdAt,
            modifiedAt,
            deletedAt
        } = props;

        this.title = title;
        this.description = description;
        this.status = status;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.id = id;
        this.user = user;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
        this.deletedAt = deletedAt;
    }

    validateProps(props: Props) {
        const {
            title,
            description,
            status,
            dateStart,
            dateEnd,
            id,
            user,
            createdAt,
            modifiedAt
        } = props;

        if (!title
            || !description
            || !status
            || !dateStart
            || !dateEnd
            || !id
            || !user
            || !createdAt
            || !modifiedAt
        ) {
            throw new Error('Creating task: Not completed info')
        }
    }

    get isDeleted() {
        return !!this.deletedAt
    }
    get isPending() {
        return this.status === Status.PENDING;
    }
    get isInProgress() {
        return this.status === Status.IN_PROGRESS;
    }
    get isCompleted() {
        return this.status === Status.COMPLETED;
    }

}