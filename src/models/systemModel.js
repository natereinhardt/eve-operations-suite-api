var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var solarSystemSchema = new Schema({
    _id: Number,
    name: String,
    imgUrl: String
});

//Expose (export) the model
module.exports = mongoose.model('SolarSystem', solarSystemSchema);