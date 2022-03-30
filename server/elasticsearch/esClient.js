const es = require('elasticsearch');
// const client = new Client({ node: 'http://localhost:9200' })

const esClient = new es.Client({
    host: 'localhost:9200',
    requestTimeout: 1000 * 60 * 60,
    log: 'trace'
    
});

module.exports = esClient;