const express = require("express");
const router = express().router;

router.length("/convertKRW", (req, res) => {
  res.send("hello");
});

module.exports = router;
