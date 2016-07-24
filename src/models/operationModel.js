var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pilotSchema = require('mongoose').model('Pilot').schema;
var haulSchema = require('mongoose').model('Haul').schema;
var systemSchema = require('mongoose').model('System').schema;
var corpSchema = require('mongoose').model('Corporation').schema;


//Schema Definition
var operationSchema = new Schema({
    _id: Number,
    corporation: corpSchema.ObjectId, // reference
    system: systemSchema.ObjectId, // reference
    participants: [pilotSchema.ObjectId], // references
    hauls: [haulSchema.ObjectId], // references
    startTime: Date,
    endTime: Date
});

//Expose (export) the model
var Operation = mongoose.model('Operation', operationSchema);