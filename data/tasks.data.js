const statuses = [
    {
        PENDING: 'PENDING',
        INPROGRESS : 'IN PROGRESS',
        COMPLETED : 'COMPLETED',
    }
];

const tasks = [
    {
        title: "Preparar las maletas",
        description:  "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
        status: statuses.PENDING, //PENDING, IN PROGRESS, COMPLETED
        datestart: "2023-11-08 22:00:00",
        dateend: "2023-12-08 22:00:00",
        id: "aaa12371232131",
        user: "egarcia",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt : "2023-11-08 22:05:00",
        deletedAt: null
    },
    {
        title: "Preparar las maletas",
        description:  "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
        status: statuses.INPROGRESS, //PENDING, IN PROGRESS, COMPLETED
        datestart: "2023-11-08 22:00:00",
        dateend: "2023-12-08 22:00:00",
        id: "87y112312311231",
        user: "egarcia",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt : "2023-11-08 22:05:00",
        deletedAt: null
    },
    {
        title: "Planchar la ropa",
        description:  "planchar todo para que quede todo más dobladito",
        status: statuses.COMPLETED, //PENDING, IN PROGRESS, COMPLETED
        datestart: "2023-11-08 22:00:00",
        dateend: "2023-12-08 22:00:00",
        id: "87y112312311231",
        user: "egarcia",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt : "2023-11-08 22:05:00",
        deletedAt: null
    }
]

export {tasks as default, statuses};