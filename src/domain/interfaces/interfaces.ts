export interface LoginProps {
    email: string,
    password: string,
}

export interface InfoCreateUser {
    name: string,
    surname: string,
    email: string,
    password: string,
}

export enum Status {
    PENDING = "PENDING",
    IN_PROGRESS = "IN PROGRESS",
    COMPLETED = "COMPLETED",
}

export interface InfoCreateTask {
    title: string,
    description: string,
    status: Status,
    dateStart?: EpochTimeStamp | null;
    dateEnd?: EpochTimeStamp | null;
    user: string,
}

export interface JwtPayload {
    id: string,
    email: string,
    iat: number,
    exp: number
}