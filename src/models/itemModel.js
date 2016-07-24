var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solarSystemSchema = require('mongoose').model('SolarSystem').schema;

//Schema Definition
var itemSchema = new Schema({
    name: String,
    type: {
        name: String,
        id: Number,
        itemInfo: String
    },
    buyPrice: Number,
    location: solarSystemSchema
});

//Expose (export) the model
var Item = mongoose.model('Item', itemSchema);