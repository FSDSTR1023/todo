import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    user: "Jordi Galobart",
  });
});

export default router;
