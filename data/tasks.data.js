const statuses = {
    PENDING: "PENDING", 
    IN_PROGRESS: "IN_PROGRESS", 
    COMPLETED: "COMPLETED"
};

export const tasks = [
    {
        title: "Preparar las maletas",
        description: "El viaje va a durar varios meses, preparar ropa para invierno y verano",
        status: statuses.PENDING, //PENDING, IN_PROGRESS, COMPLETED  
        datestart: "",
        dateend: "",
        id: "ASDFLKJ23475843",
        user: "juanmm",
        createdAt: "11/11/2023",
        modifiedAt: "",
        deletedAt: null
    },
    {
        title: "Task 2",
        description: "Descripción task 2",
        status: statuses.COMPLETED, 
        datestart: "",
        dateend: "",
        id: "ASDFLKJ23475854",
        user: "juanmm",
        createdAt: "1/1/2020",
        modifiedAt: "",
        deletedAt: null
    },
    {
        title: "Task 3",
        description: "Descripción task 3",
        status: statuses.IN_PROGRESS,  
        datestart: "",
        dateend: "",
        id: "ASDFLKJ23475865",
        user: "juanmm",
        createdAt: "9/7/2023",
        modifiedAt: "",
        deletedAt: null
    }
];

// {
//     "title": "Preparar las maletas",
//     "description": "El viaje va a durar varios meses, preparar ropa para invierno y verano",
//     "status": "PENDING",
//     "datestart": "2023-5-14",
//     "dateend": "2024-2-2",
//     "id": "ASDFLKJ23475843",
//     "user": "juanmm",
//     "createdAt": "11/11/2023",
//     "modifiedAt": "",
//     "deletedAt": null
// }


// {
//     "title": "Task 2",
//     "description": "Descripción task 2",
//     "status": "COMPLETED", 
//     "datestart": "2021-1-1",
//     "dateend": "2022-1-1",
//     "id": "ASDFLKJ23475854",
//     "user": "juanmm",
//     "createdAt": "",
//     "modifiedAt": "",
//     "deletedAt": null
// }

// {
//     "title": "Task 3",
//     "description": "Descripción task 3",
//     "status": "IN_PROGRESS",  
//     "datestart": "2023-9-12",
//     "dateend": "2022-1-2",
//     "id": "ASDFLKJ23475865",
//     "user": "juanmm",
//     "createdAt": "9/7/2023",
//     "modifiedAt": "",
//     "deletedAt": null
// }


module.exports = tasks;