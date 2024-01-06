require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routers/routes1");
const connectDb=require("./Database/connectDb")
const port = 8000;

//---------------------------------------------------middlewares--------------------------------->>>
app.use(express.json());
app.use("/api/auth", router);

// -----------------------------------------------------routes--------------------------------------->>>
connectDb().then(
app.listen(port, () => {
  console.log(`hello listinig to the port ${port}`);
}))
