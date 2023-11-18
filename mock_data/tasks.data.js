
export const statusTypes = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN PROGRESS",
    COMPLETED: "COMPLETED",
}
export const tasks = [
    {
        title: 'Complete Project Proposal',
        description: 'Draft and finalize the project proposal document for the upcoming client meeting.',
        status: statusTypes.PENDING,
        dateStart: '2023-11-15',
        dateEnd: '2023-11-20',
        id: 'TSK001',
        user: 'John Doe',
        createdAt: '2023-11-12',
        modifiedAt: '2023-11-13',
        deletedAt: null
    },
    {
        title: 'Review Weekly Reports',
        description: 'Analyze and provide feedback on the weekly team performance reports.',
        status: statusTypes.IN_PROGRESS,
        dateStart: '2023-11-14',
        dateEnd: '2023-11-18',
        id: 'TSK002',
        user: 'Jane Smith',
        createdAt: '2023-11-12',
        modifiedAt: null,
        deletedAt: null
    },
    {
        title: 'Review Weekly Reports',
        description: 'Analyze and provide feedback on the weekly team performance reports.',
        status: statusTypes.COMPLETED,
        dateStart: '2023-11-14',
        dateEnd: '2023-11-18',
        id: 'TSK003',
        user: 'Joane Smith',
        createdAt: '2023-11-12',
        modifiedAt: null,
        deletedAt: null
    },
];
