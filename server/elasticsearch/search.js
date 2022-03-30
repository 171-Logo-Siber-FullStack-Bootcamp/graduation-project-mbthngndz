const esClient = require("./esClient");
const logger = require("../logger/index")

const category = async (reqQuery, res) => {
    esClient.ping({}, async (error) => {
      if (error) {
        logger.error(error);
      } else {
        console.info("Elasticsearch is running...");
      }});
    
      const index = "category";
      const type = "elastic";
  
      const searchBody = {
        query: {
          match_phrase_prefix: {
            "title": reqQuery._parsedOriginalUrl.query.split("=").pop() //It is a method I use to find the value sent as a query param, but I think this is not what it should be.
          }
        }
      };

    const search = await esClient.search({
      from:reqQuery.page,
      index,
      type,
      body: searchBody,
    });

    const result = search.hits.hits;
    result.forEach((item) => {
      console.log(item._source.title);
    });
    console.log(result)
    res.send(result)
  }

module.exports = { category };
