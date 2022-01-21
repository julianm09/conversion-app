const axios = require("axios");
const convertUSD = require('./Conversions');

/* console.log(add(3, 5));
console.log(subtract(3, 5)); */

const getRates = async () => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/USD"
  );
  console.log(res.data);
};

getRates();