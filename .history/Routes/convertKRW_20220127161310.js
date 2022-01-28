const express = require("express");
const router = express.Router();

router.get("/convertKRW", (req, res) => {
  res.end("hello");
  console.log(req.query.currency);
  console.log(req.query.amount);
});

module.exports = router;
