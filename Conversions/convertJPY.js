<<<<<<< HEAD
=======
const axios = require("axios");

>>>>>>> 78b8221dee84fccb2efc83859602fa26721bda47
const getRates = async () => {
  const res = await axios.get(
    "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/JPY"
  );
<<<<<<< HEAD
  console.log(res.data);
=======
>>>>>>> 78b8221dee84fccb2efc83859602fa26721bda47
  return res.data;
};

const convertJPY = async (x, y) => {
  const rates = await getRates();
<<<<<<< HEAD
  return x * rates[y];
};

convertJPY(100, "CAD");


module.exports = convertJPY
=======
  const conversion = (await rates.conversion_rates[y]) * x;
  return conversion;
};

module.exports = convertJPY;
>>>>>>> 78b8221dee84fccb2efc83859602fa26721bda47
