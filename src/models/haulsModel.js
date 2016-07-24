var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var haulSchema = new Schema({
    corpId: {
            type: Schema.ObjectId,
            ref: 'Corporation'
    }, //Reference
    pilot: {
            type: Schema.ObjectId,
            ref: 'Pilot'
    }, //Reference
    ship:{
            type: Schema.ObjectId,
            ref: 'Ship'
        }, //References,
    items: [
        {
            type: Schema.ObjectId,
            ref: 'Item'
        }
    ], //References,
    depositTime: Date
});

//Expose (export) the model
module.exports = mongoose.model('Haul', haulSchema);