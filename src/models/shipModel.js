var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var shipSchema = new Schema({
    _id: Number,
    name: String,
    type: {type: String},
    imgUrl: String,
    sharePercent: Number
});

//Expose (export) the model
var Ship = mongoose.model('Ship', shipSchema);