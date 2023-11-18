import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    user: "Sabine Leuenberger",
  });
});

export default router;