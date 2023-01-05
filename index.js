let dotenv=require('dotenv').config()
const express = require("express");
const app = express();

const port = process.env.PORT || 8800;
const formRoutes = require("./src/routes/crud");
const loginRoutes= require("./src/routes/login");
require("./src/connectionAndSchema/config");
let authenticateToken = require("./src/middlewares/auth")
let cors = require("cors")
 
app.use(cors())
app.use("/api/property", authenticateToken, formRoutes)
app.use("/api",loginRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;