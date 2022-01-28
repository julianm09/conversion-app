const express = require("express");
const app = express();
const conversionRouter = require("./Routes/conversion");
const convertKRW = require("/Routes/convertKRW");

app.use(express.json());
app.use(conversionRouter);
app.use(convertKRW);
app.listen(3000, () => console.log(`server running on 3000`));
