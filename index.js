const express = require("express");
const app = express();
const convertJPY = require("./Routes/convertJPY")

app.use(express.json());
app.use(convertJPY)

app.listen(3000, () => console.log(`server running on 3000`));
