import express from 'express';
const router = express.Router();

// GET Home page
router.get("/", function(req, res, next) {
    res.send("Hola from Index");
  });

export default router;