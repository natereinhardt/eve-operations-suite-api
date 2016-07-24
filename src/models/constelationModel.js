var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solarSystemSchema = require('mongoose').model('SolarSystem').schema;

//Schema Definition
var constellationSchema = new Schema({
    id: Number,
    name: String,
    solarSystems: [solarSystemSchema]
});

//Expose (export) the model
var Constellation = mongoose.model('Constellation', constellationSchema);