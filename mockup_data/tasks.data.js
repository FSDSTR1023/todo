

const statuses = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN PROGRESS",
  COMPLETED: "COMPLETED"
}

const tasks = [
  {
    title: "Preparar las maletas",
    description:
      "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
    status: statuses.PENDING, //PENDING, IN PROGRESS, COMPLETED
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    id: "aaa12371232131",
    user: "jgalobart",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
  {
    title: "Preparar las maletas",
    description:
      "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
    status: statuses.PENDING, //PENDING, IN PROGRESS, COMPLETED
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    id: "87y112312311231",
    user: "jgalobart",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
  {
    title: "Comprar comida",
    description:
      "Comprar suficiente moncha para el viaje",
    status: statuses.COMPLETED, //PENDING, IN PROGRESS, COMPLETED
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    id: "6756ujryu",
    user: "jgalobart",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
  {
    title: "Planchar ropa",
    description:
      "Para ir con todo el chaine",
    status: statuses.IN_PROGRESS, //PENDING, IN PROGRESS, COMPLETED
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    id: "45o354u3oiug",
    user: "jgalobart",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
];



export { tasks as default, statuses};
