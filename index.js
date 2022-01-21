const convertJPY = require("./Conversions/convertJPY");

const getRates = async () => {
  console.log(await convertJPY(100, "CAD"));
};

getRates();
