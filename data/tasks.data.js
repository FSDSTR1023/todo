const statuses = {
  PENDING: "PENDING",
  IN_PROGRESS: "IN PROGRESS",
  COMPLETED: "COMPLETED",
};

const tasks = [
  {
    id: "aaa12371232131",
    title: "Preparar las maletas",
    description:
      "El viaje a marte va a durar unos cuantos meses, preparar ropa de verano e invierno",
    status: "pending",
    user: "jgalobart",
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
  {
    id: "aaa12371232131",
    title: "Preparar la comida",
    description: "Necesito comida para el viaje",
    status: "completed",
    user: "jgalobart",
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
  {
    id: "bbb12371232131",
    title: "Planchando la ropa",
    description: "Necesito ropa planchada para no ir hecho un desastre",
    status: "in_progress",
    user: "rsahagun",
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    createdAt: "2023-11-10 20:03:00",
    modifiedAt: "2023-11-08 22:05:00",
    deletedAt: null,
  },
];

export { tasks as default, statuses };