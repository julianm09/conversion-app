const express = require("express");
const app = express();
const conversionRouter = require("./Routes/conversion");
const convertKRW = require("./Routes/convertKRW");
const convertJPY = require("./Routes/convertJPY");
const convertUSD  = require("./Routes/convertUSD");

app.use(express.json());
app.use(conversionRouter);
app.use(convertKRW);
app.use(convertJPY);
app.use(convertUSD);

app.listen(3000, () => console.log(`server running on 3000`));
