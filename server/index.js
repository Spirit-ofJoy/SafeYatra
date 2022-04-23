const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./routes/index");
const App = express();
const cors = require("cors");
dotenv.config();

App.use(cors);
App.use(morgan);

App.listen(8180, () => {
  console.log("Server is running");
  router(App);
});
