var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solarSystemSchema = require('mongoose').model('SolarSystem').schema;

//Schema Definition
var itemSchema = new Schema({
    _id : Number,
    name: String,
    type: {
        name: String,
        id: Number,
        itemInfo: String
    },
    buyPrice: Number,
    location: solarSystemSchema.ObjectId
});

//Expose (export) the model
var Item = mongoose.model('Item', itemSchema);