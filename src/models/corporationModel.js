var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var corporationSchema = new Schema({
    eveId: Number,
    name: String,
    members: [
        {
        type: Schema.ObjectId,
        ref: 'Pilot'
        }
    ], //References
    operations:  [
        {
            type: Schema.ObjectId,
            ref: 'Operation'
        }
    ], //References
    ships: [
        {
            type: Schema.ObjectId,
            ref: 'Ship'
        }
    ], //References,
    items: [
        {
            type: Schema.ObjectId,
            ref: 'Item'
        }
    ], //References,
    ceoId: Number
});

//Expose (export) the model
module.exports = mongoose.model('Corporation', corporationSchema);