const express=require("express");
const dotenv=require("dotenv");
//const logger = require("./app/common/winstonLogger");
const db = require("./app/DBConfig/Dbconfig");
const console = require('./app/common/logger').console;
require("dotenv").config()
const app = express();

const router=require("./mainRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api",router)

// db.sequelize.sync({alter:true});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});