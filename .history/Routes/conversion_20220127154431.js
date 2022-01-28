const express = require("express");
const router = express.Router();
const {
  getConversions,
  createConversion,
  getConversionById,
} = require("../Controller/conversions");

router.get("/conversions", getConversions);
router.post("/new/conversion", createConversion);
router.get("/conversion/:id", getConversionById);

module.exports = router;
