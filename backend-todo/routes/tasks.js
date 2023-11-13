const express = require("express");
const router = express.Router();

const tasks = [
  {
    title: "Make lunch",
    description: "chop veg, fry food, serve",
    status: "PENDING", // PENDING, IN PROGRESS, COMPLETE
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    id: "1234",
    user: "tmorales",
    createdAt: "2023-11-13 11:34:00",
    modifiedAt: "2023-11-13 11:37:00",
    deletedAt: null,
  },
  {
    title: "Clean house",
    description: "Do laundry, do dishes",
    status: "COMPLETE", // PENDING, IN PROGRESS, COMPLETE
    datestart: "2023-11-08 22:00:00",
    dateend: "2023-12-08 22:00:00",
    id: "5678",
    user: "tmorales",
    createdAt: "2023-11-13 11:34:00",
    modifiedAt: "2023-11-13 11:37:00",
    deletedAt: null,
  },
];

router.get("/", (req, res) => {
  console.log("query params", req.query);
  res.json(tasks);
});

router.get("/:id", (req, res) => {
  console.log("unique task", req.params);
  res.json(tasks[0].id);
});

router.delete("/:id", (req, res) => {
  res.json({
    msg: req.params.id + " has been deleted",
  });
});

router.put("/:id", (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({
    msg: "Task has been updated",
  });
});

router.patch("/:id", (req, res) => {
  res.json({
    msg: req.params.id + " has been patched",
  });
});

router.post("/", (req, res) => {
  console.log("create task", req.query, req.params, req.body);
  res.json({
    msg: "Task has been created",
  });
});

module.exports = router;

/// get, post, delete, put, patch,
