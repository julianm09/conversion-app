const express = require("express");
const router = express.Router();

router.get("/convertKRW", (req, res) => {
  res.end("hello");
});

module.exports = router;
