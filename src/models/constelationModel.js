var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var constellationSchema = new Schema({
    _id: Number,
    name: String,
    solarSystems: [{
        type: Schema.ObjectId,
        ref: 'SolarSystem'
    }]
});

//Expose (export) the model
module.exports = mongoose.model('Constellation', constellationSchema);