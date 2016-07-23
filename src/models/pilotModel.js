var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var corpSchema = require('mongoose').model('Corporation').schema;

//Schema Definition
var pilotSchema = new Schema({
    id: Number,
    corporation: corpSchema, // reference
    name: String, // reference
    imgUrl: String,
    walletBalance: Number,
    active: Boolean
});

//Expose (export) the model
var Pilot = mongoose.model('Pilot', pilotSchema);