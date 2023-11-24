const statuses = {
  incomplete: "incomplete",
  complete: "complete",
};

const tasks = [
  {
    "id": 1,
    "title": "Complete Project Proposal",
    "description": "Draft and finalize the project proposal for client presentation.",
    "status": "incomplete",
    "datestart": "2023-11-15",
    "dateend": "2023-11-20",
    "user": "John Doe",
    "createdAt": "2023-11-13T08:00:00Z",
    "modifiedAt": "2023-11-14T14:30:00Z",
    "deletedAt": null
  },
  {
    "id": 2,
    "title": "Review Code Changes",
    "description": "Review and provide feedback on recent code changes in the development branch.",
    "status": "incomplete",
    "datestart": "2023-11-16",
    "dateend": "2023-11-18",
    "user": "Jane Smith",
    "createdAt": "2023-11-12T10:45:00Z",
    "modifiedAt": "2023-11-17T11:20:00Z",
    "deletedAt": null
  },
  {
    "id": 3,
    "title": "Prepare Presentation Slides",
    "description": "Create presentation slides for the upcoming team meeting.",
    "status": "complete",
    "datestart": "2023-11-14",
    "dateend": "2023-11-16",
    "user": "Bob Johnson",
    "createdAt": "2023-11-10T15:20:00Z",
    "modifiedAt": "2023-11-16T09:10:00Z",
    "deletedAt": null
  },
  {
    "id": 4,
    "title": "Attend Webinar",
    "description": "Participate in the industry webinar on new trends and technologies.",
    "status": "incomplete",
    "datestart": "2023-11-19",
    "dateend": "2023-11-19",
    "user": "Emily White",
    "createdAt": "2023-11-08T11:30:00Z",
    "modifiedAt": "2023-11-18T13:45:00Z",
    "deletedAt": null
  },
  {
    "id": 5,
    "title": "Update Documentation",
    "description": "Review and update project documentation for the upcoming release.",
    "status": "incomplete",
    "datestart": "2023-11-17",
    "dateend": "2023-11-22",
    "user": "Alex Brown",
    "createdAt": "2023-11-09T14:15:00Z",
    "modifiedAt": "2023-11-21T10:05:00Z",
    "deletedAt": null
  },
  {
    "id": 6,
    "title": "Client Meeting",
    "description": "Schedule and conduct a meeting with the client to discuss project progress.",
    "status": "incomplete",
    "datestart": "2023-11-15",
    "dateend": "2023-11-15",
    "user": "Sophie Davis",
    "createdAt": "2023-11-11T09:50:00Z",
    "modifiedAt": "2023-11-15T14:55:00Z",
    "deletedAt": null
  },
  {
    "id": 7,
    "title": "Bug Fixing",
    "description": "Investigate and fix reported bugs in the software application.",
    "status": "incomplete",
    "datestart": "2023-11-18",
    "dateend": "2023-11-23",
    "user": "Mark Taylor",
    "createdAt": "2023-11-07T13:40:00Z",
    "modifiedAt": "2023-11-22T08:30:00Z",
    "deletedAt": null
  },
  {
    "id": 8,
    "title": "Team Training",
    "description": "Organize training session for team members on new tools and technologies.",
    "status": "incomplete",
    "datestart": "2023-11-20",
    "dateend": "2023-11-21",
    "user": "Eva Rodriguez",
    "createdAt": "2023-11-06T16:25:00Z",
    "modifiedAt": "2023-11-19T12:15:00Z",
    "deletedAt": null
  },
  {
    "id": 9,
    "title": "Data Analysis",
    "description": "Conduct data analysis and prepare a report for the management team.",
    "status": "incomplete",
    "datestart": "2023-11-14",
    "dateend": "2023-11-18",
    "user": "Michael Clark",
    "createdAt": "2023-11-05T10:10:00Z",
    "modifiedAt": "2023-11-17T09:40:00Z",
    "deletedAt": null
  },
  {
    "id": 10,
    "title": "Project Kickoff Meeting",
    "description": "Kickoff meeting to discuss project goals, timelines, and responsibilities.",
    "status": "complete",
    "datestart": "2023-11-13",
    "dateend": "2023-11-14",
    "user": "Lucy Miller",
    "createdAt": "2023-11-04T12:00:00Z",
    "modifiedAt": "2023-11-14T16:20:00Z",
    "deletedAt": null
  }
];

export { tasks as default, statuses };
