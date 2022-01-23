const axios = require("axios");

const getRates = async () => {
    const res = await axios.get(
      "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/PHP"
    );
    return res.data;
  };
  
  const convertPHP = async (x, y) => {
    const rates = await getRates();
    const conversion = (await rates.conversion_rates[y]) * x;
    return conversion;
  };
  
  convertPHP(100, "CAD");
  
  
  module.exports = convertPHP;