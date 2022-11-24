
const express = require("express");

const app = express();

app.use(express.json());

app.use("/", require("./routes/router"));

app.listen(3005, ()=>console.log("sever is runing in port 3005"));