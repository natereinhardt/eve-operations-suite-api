var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pilotSchema = require('mongoose').model('Pilot').schema;
var shipSchema = require('mongoose').model('Ship').schema;
var itemSchema = require('mongoose').model('Item').schema;


//Schema Definition
var haulSchema = new Schema({
    corpId: Number, //change to who corp
    pilot: pilotSchema, //change to who
    ship: shipSchema,
    items: [itemSchema],
    depositTime: Date
});

//Expose (export) the model
var Haul = mongoose.model('Haul', haulSchema);