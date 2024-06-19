const express=require("express");

const app=express();
require("dotenv").config();
const db_connect = require("./db_connect");
db_connect();
app.use(express.json());
app.use("/user",require("./routes/user"))
app.listen(process.env.PORT,(err)=>err?console.log(err):console.log("server is running"));