var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var corpSchema = require('mongoose').model('Corporation').schema;

//Schema Definition
var pilotSchema = new Schema({
    _id: Number,
    corporation: corpSchema.ObjectId, // reference
    name: String.ObjectId, // reference
    imgUrl: String,
    walletBalance: Number,
    active: Boolean
});

//Expose (export) the model
var Pilot = mongoose.model('Pilot', pilotSchema);