const getRates = async () => {
    const res = await axios.get(
      "https://v6.exchangerate-api.com/v6/5536c5ab733c937f41be6072/latest/PHP"
    );
    console.log(res.data);
    return res.data;
  };
  
  const convertPHP = async (x, y) => {
    const rates = await getRates();
    return x * rates[y];
  };
  
  convertPHP(100, "CAD");
  
  
  module.exports = convertPHP