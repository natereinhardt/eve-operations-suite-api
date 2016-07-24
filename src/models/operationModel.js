var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Schema Definition
var operationSchema = new Schema({
    _id: Number,
    corporation: {
            type: Schema.ObjectId,
            ref: 'Corporation'
    }, //Reference
    system: {
        type: Schema.ObjectId,
        ref: 'SolarSystem'
    }, //Reference
    participants: [{
        type: Schema.ObjectId,
        ref: 'Pilot'
    }],
    hauls: [{
        type: Schema.ObjectId,
        ref: 'Haul'
    }], //References
    startTime: Date,
    endTime: Date
});

//Expose (export) the model
module.exports = mongoose.model('Operation', operationSchema);
