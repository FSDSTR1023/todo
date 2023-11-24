import { Status } from "../../domain/interfaces/interfaces"

const statuses = [
    Status.COMPLETED.toString(),
    Status.IN_PROGRESS.toString(),
    Status.PENDING.toString()
]

export const statusTask = (value: string) => {
    if (!statuses.includes(value)) {
        throw new Error(`Invalid status. Valid statuses are: ${statuses.join(', ')}`)
    }
    return true;
}