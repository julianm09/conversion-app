const axios = require("axios");

const getRates = async () => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/EUR"
  );
  return res.data;
};

const convertEUR = async (x, y) => {
  const rates = await getRates();
  const conversion = (await rates.conversion_rates[y]) * x;
  return conversion;
};

module.exports = convertEUR;