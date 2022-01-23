const axios = require("axios");
const {convertJPY, convertEUR} = require('./Conversions');

const getRates = async () => {
  console.log(await convertJPY(100, "CAD"));
  
};

getRates();
