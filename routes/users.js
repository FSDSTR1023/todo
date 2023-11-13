import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    user: "Jordi Galobart",
  });
});

export default router;
