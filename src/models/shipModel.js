var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var shipSchema = new Schema({
    eveId: Number,
    name: String,
    type: {type: String},
    imgUrl: String,
    sharePercent: Number
});

//Expose (export) the model
module.exports = mongoose.model('Ship', shipSchema);