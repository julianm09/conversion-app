

const getRates = async () => {
    const res = await axios.get(
      "https://v6.exchangerate-api.com/v6/03c5b60a9aa12a5a3ed27421/latest/USD"
    );
    console.log(res.data);
    return res.data;
  };
  
  const convertUSD = async (x, y) => {
    const rates = await getRates();
    return x * rates[y];
  };
  
  convertUSD(100, "USD");
  
  
  module.exports = convertUSD