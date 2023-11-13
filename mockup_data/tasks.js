const statusTypes = {
    PENDING: "PENDING",
    IN_PROGRESS: "IN PROGRESS",
    COMPLETED: "COMPLETED",
}
const tasks = [
    {
        title: "Task Title 1",
        description: "Task Description",
        status: statusTypes.PENDING , 
        datestart: "2023-11-01", 
        dateend: "2023-11-10", 
        id: 1, 
        user: "Kayra", 
        createdAt: "2023-11-01T09:00:00.000Z", 
        modifiedAt: "2023-11-02T09:00:00.000Z", 
        deletedAt: null 
    },
    {
        title: "Task Title 2",
        description: "Task Description",
        status: statusTypes.IN_PROGRESS, 
        datestart: "2023-11-01", 
        dateend: "2023-11-10", 
        id: 2, 
        user: "Pedrito", 
        createdAt: "2023-11-01T09:00:00.000Z", 
        modifiedAt: "2023-11-02T09:00:00.000Z", 
        deletedAt: null 
    },
    {
        title: "Task Title 3",
        description: "Task Description",
        status: statusTypes.COMPLETED, 
        datestart: "2023-11-01", 
        dateend: "2023-11-10", 
        id: 3, 
        user: "Pedrito", 
        createdAt: "2023-11-01T09:00:00.000Z", 
        modifiedAt: "2023-11-02T09:00:00.000Z", 
        deletedAt: null 
    },
    {
        title: "Task Title 4",
        description: "Task Description",
        status: statusTypes.COMPLETED, 
        datestart: "2023-11-01", 
        dateend: "2023-11-10", 
        id: 4, 
        user: "Pedrito", 
        createdAt: "2023-11-01T09:00:00.000Z", 
        modifiedAt: "2023-11-02T09:00:00.000Z", 
        deletedAt: null 
    },
  ]

  export { tasks as default, statusTypes };