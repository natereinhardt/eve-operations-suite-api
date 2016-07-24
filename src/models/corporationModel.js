var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var operationSchema = require('mongoose').model('Operation').schema;
var pilotSchema = require('mongoose').model('Pilot').schema;
var shipSchema = require('mongoose').model('Ship').schema;
var itemSchema = require('mongoose').model('Item').schema;



//Schema Definition
var corporationSchema = new Schema({
    corpId: Number,
    name: String,
    members: [pilotSchema], //References
    operations: [operationSchema], //References
    ships: [shipSchema],
    items: [itemSchema],
    ceoId: Number
});

//Expose (export) the model
var Corporation = mongoose.model('Corporation', corporationSchema);