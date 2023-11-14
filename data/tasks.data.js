const statuses ={
    PENDING: 'PENDING',
    INPROGRESS: 'IN PROGRESS',
    COMPLETED: 'COMPLETED',
}

const tasks = [
    {
        title: "Preparar maletas",
        description: "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
        status: statuses.PENDING,
        datestart: "2023-11-08 20:03:00",
        dateend: "2023.12-08 22:05:00",
        id: "aaa12371232131",
        user: "tfonollet",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt: "2023-11-08 22:05:00",
        deletedAt: null,
    },
    {
        title: "Preparar maletas",
        description: "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
        status: statuses.PENDING,
        datestart: "2023-11-08 20:03:00",
        dateend: "2023.12-08 22:05:00",
        id: "87y112312311231",
        user: "tfonollet",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt: "2023-11-08 22:05:00",
        deletedAt: null,
    },
    {
        title: "Preparar la comida",
        description: "Necesito comida para el viaje",
        status: statuses.COMPLETED,
        datestart: "2023-11-08 22:00:00",
        dateend: "2023.12-08 22:00:00",
        id: "8456112312311231",
        user: "tfonollet",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt: "2023-11-08 22:05:00",
        deletedAt: null,
    },
    {
        title: "Planchando la ropa",
        description: "Necesito ropa planchada para no ir hecha un desastre",
        status: statuses.PENDING,
        datestart: "2023-11-08 20:03:00",
        dateend: "2023.12-08 22:05:00",
        id: "8456112312311231",
        user: "tfonollet",
        createdAt: "2023-11-10 20:03:00",
        modifiedAt: "2023-11-08 22:05:00",
        deletedAt: null,
    },

];

export { tasks as default, statuses };