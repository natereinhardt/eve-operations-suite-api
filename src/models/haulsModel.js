var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pilotSchema = require('mongoose').model('pilotModel').schema;
var shipSchema = require('mongoose').model('shipModel').schema;
var itemSchema = require('mongoose').model('itemModel').schema;


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