const express = require("express");
const router = express.Router();

router.get("/convertKRW", async (req, res) => {
  res.end("hello");
  console.log(req.query.currency.toUpperCase());
  console.log(Number(req.query.amount));
});

module.exports = router;
