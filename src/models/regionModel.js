var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var regionSchema = new Schema({
    _id: Number,
    name: String,
    constellations: [{
        type: Schema.ObjectId,
        ref: 'Constellation'
    }]//Reference
});

//Expose (export) the model
module.exports = mongoose.model('Region', regionSchema);