const { convertKRW } = require("../Conversions");

const getConversions = async (req, res) => {
  const amount = Number(req.query.amount);
  const currency = req.query.currency.toUpperCase();
  const val = await convertKRW(amount, currency);
  res.end(`${req.query.amount + " " + currency} is ${String(val)} KRW`);
};

module.exports = { getConversions };
