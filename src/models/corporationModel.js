var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var corporationSchema = new Schema({
    corpId: Number,
    name: String,
    members: [pilot],
    operations: [operation],
    ships: [ship],
    items: [item],
    ceoId: Number
});

//Expose (export) the model
var Corporation = mongoose.model('Corporation', corporationSchema);