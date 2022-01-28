const { convertJPY } = require("../Conversions");

const getConversions = async (req, res) => {
    const amount = Number(req.query.amount)
    const currency = req.query.currency.toUpperCase()
    const val = await convertJPY(amount, currency)
    res.end(`${req.query.amount + ' ' + currency} is ${String(val)} JPY`)
  };
  
  module.exports = { getConversions };
  