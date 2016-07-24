var eveCrest = require('./../controllers/eveCrest');

module.exports = function(app) {

    app.route('/api/crest/priceData').get(eveCrest.getMarketData);

};