var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var itemSchema = new Schema({
    eveId : Number,
    name: String,
    type: {
        name: String,
        id: Number,
        itemInfo: String
    },
    buyPrice: Number,
    location: {
            type: Schema.ObjectId,
            ref: 'SolarSystem'
    }//Reference
});

//Expose (export) the model
module.exports = mongoose.model('Item', itemSchema);