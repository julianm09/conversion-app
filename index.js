const express = require("express");
const app = express();
const conversionRouter = require("./Routes/conversion");

app.use(express.json());
app.use(conversionRouter);
app.listen(3000, () =>
  console.log(
    `server running on 3000"
post
    {
      "fromCurrency": "usd",
      "toCurrency": "cad",
      "amount": "10"
    }`
  )
);
