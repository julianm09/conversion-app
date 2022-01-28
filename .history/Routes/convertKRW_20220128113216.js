// const express = require("express");
// const router = express.Router();
// const { convertKRW } = require("../Conversions");

// router.get("/convertKRW", async (req, res) => {
//   res.end("hello");
//   console.log(req.query.currency.toUpperCase());
//   console.log(Number(req.query.amount));
//   const val = await convertKRW(
//     Number(req.query.amount),
//     req.query.currency.toUpperCase()
//   );
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getConversions } = require("../Controller/convertJPY");

router.get("/convertKRW", getConversions);

module.exports = router;
