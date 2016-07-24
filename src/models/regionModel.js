var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var constellationSchema = require('mongoose').model('Constellation').schema;

//Schema Definition
var regionSchema = new Schema({
    id: Number,
    name: String,
    constellations: [constellationSchema]
});

//Expose (export) the model
var Region = mongoose.model('Region', regionSchema);