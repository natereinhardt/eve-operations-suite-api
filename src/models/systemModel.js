var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var solarSystemSchema = new Schema({
    id: Number,
    name: String,
    imgUrl: String
});

//Expose (export) the model
var SolarSystem = mongoose.model('SolarSystem', solarSystemSchema);