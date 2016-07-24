var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var pilotSchema = new Schema({
    eveId: Number,
    corporation: {
        type: Schema.ObjectId,
        ref: 'Corporation'
    }, //Reference,
    name: String,
    imgUrl: String,
    walletBalance: Number,
    active: Boolean
});

//Expose (export) the model
module.exports = mongoose.model('Pilot', pilotSchema);