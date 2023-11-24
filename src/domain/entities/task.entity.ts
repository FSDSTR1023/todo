import { Status } from "../interfaces/interfaces";

interface Props {
    title: string;
    description?: string;
    status: Status;
    dateStart?: EpochTimeStamp | null;
    dateEnd?: EpochTimeStamp | null;
    id: string;
    user: string;
    createdAt: EpochTimeStamp;
    modifiedAt: EpochTimeStamp;
    deletedAt?: EpochTimeStamp | null;
};

export class TaskEntity {

    public title: string;
    public description?: string;
    public status: Status;
    public dateStart?: EpochTimeStamp | null;
    public dateEnd?: EpochTimeStamp | null;
    public id: string;
    public user: string;
    public createdAt: EpochTimeStamp;
    public modifiedAt: EpochTimeStamp;
    public deletedAt?: EpochTimeStamp | null;

    constructor(props: Props) {

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