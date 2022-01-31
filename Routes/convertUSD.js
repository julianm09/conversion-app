const express = require("express");
const router = express.Router();
const { convertUSD } = require("../Conversions");

router.get("/convertUSD", async (req, res) => {
  res.end("hello");
  console.log(req.query.currency.toUpperCase());
  console.log(Number(req.query.amount));
  const val = await convertUSD(
    Number(req.query.amount),
    req.query.currency.toUpperCase()
  );
});

module.exports = router;
