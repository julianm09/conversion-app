const express = require("express");
const router = express.Router();

router.get("/convertKRW", (req, res) => {
  res.end("hello");
  console.log(req.query.currency);
});

module.exports = router;
