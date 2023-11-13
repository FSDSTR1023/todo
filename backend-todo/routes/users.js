const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    user: "Toni Morales",
  });
});

module.exports = router;
