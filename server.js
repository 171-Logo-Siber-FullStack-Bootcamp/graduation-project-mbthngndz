const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./server/routes/category-router');
const logger = require("./server/logger/index")
const db = require("./server/models");
var path = require('path');

const app = express();

const corsOptions = {
  origin: "http://localhost:8080"
};
app.use(cors(corsOptions));

db.sequelize.sync();

var dir = path.join(__dirname, 'uploads');

app.use(express.static(dir));

// we may need to drop existing tables and re-sync database, use force: true
// db.sequelize.sync({ force: true }).then(() => {
//     logger.info("Drop and re-sync db.");
//   });

app.use(express.urlencoded({ extended: true }));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// Router middleware
app.use("", routes);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});