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


// elastic search npm start ile index create edilmesi için server.js altına kuruldu 

const esClient = require("./server/elasticsearch/esClient");
const data = require("./server/elasticsearch/data.json");

esClient.ping({}, async (error) => {
    if (error) {
      logger.error(error);
    } else {
      logger.info("Elasticsearch is running...");
  
      const index = "category";
  
       {
        logger.warn("index exist")
        if (await esClient.indices.exists({ index })) {
          try {
            await esClient.indices.delete({ index });
          } catch (err) {
            logger.error("Reset index error", err);
          }
        }
      }
      //aynı index ismi varsa kontrol edip getiriyor
      try {
        return await esClient.indices.get({
          index: index,
        });
      } catch {
        await esClient.indices.create({
          index,
        });
        logger.info("index created")
      }
  
      const mapping = {
        properties: {
          title: {
            type: "text",
          },
          description: {
           type : "text",
          },
          price: {
           type : "integer",
          }
        },
      };
  
  
      await esClient.indices.putMapping({
        index,
        type: "elastic",
        body: mapping,
        includeTypeName: true,
      });
      logger.info("mapped")
  
      
      // categories.getCategories.forEach(async (item, key) => {
        data.forEach(async (item, key) => {
        await esClient.index({
          index,
          type: "elastic",
          id: key + 1,
          body: item,
        });
      });
    }
  });
  