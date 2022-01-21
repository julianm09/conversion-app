const axios = require("axios");
const convertJPY = require("./Conversions");

const getRates = async () => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/CAD"
  );
  console.log(res.data);
};

getRates();
