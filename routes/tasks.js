import { Router } from "express";
const router = Router();

// /tasks/
router.get("/", (req, res) => {
  console.log("query params", req.query);
  res.json(gallina);
});

router.get("/:id", (req, res) => {
  console.log("unique task", req.params, req.query);
  res.json(tasks[0]);
});

router.post("/", (req, res) => {
  console.log("create task", req.query, req.params, req.body);
  res.json({ msg: "task created succesfully" });
});

router.put("/:id", (req, res) => {
  console.log("update task", req.query, req.params, req.body);
  res.json({ msg: "task updated succesfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: req.params.id + " has been deleted" });
});

export default router;
