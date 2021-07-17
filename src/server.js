// dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// importing dev created dependencies
const routes = require("./routes");
const logger = require("./middleware/logger");
const { DB_URL, MONGOOSE_OPTIONS } = require("./config");

// assigning a port
const PORT = process.env.PORT || 3000;

// connect to mongoose database using the assigned database url and option
mongoose.connect(DB_URL, MONGOOSE_OPTIONS);

// creating express application
const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger);
app.use(routes);

// this function will run the server
const init = async () => {
  try {
    app.listen(PORT, () =>
      console.info(`\nServer running on http://localhost:${PORT}\n`)
    );
  } catch (error) {
    console.info(error);
    console.error("Failed to connect to DB");
  }
};

init();
