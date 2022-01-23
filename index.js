const axios = require("axios");
const {convertJPY, convertEUR, convertPHP, convertKRW} = require('./Conversions');

const getRates = async () => {
  console.log(await convertJPY(100, "CAD"));
  console.log(await convertKRW(100, "CAD"));
};

getRates();