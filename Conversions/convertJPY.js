const axios = require("axios");

//async call to exchange rate api, change last three letters of URL to your choice
const getRates = async () => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/JPY"
  );
  return res.data;
};

//async function to convert rates x is rate, y is type of currency
const convertJPY = async (x, y) => {
  const rates = await getRates();
  const conversion = (await rates.conversion_rates[y]) * x;
  return conversion;
};

module.exports = convertJPY;
