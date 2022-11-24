const mongoose = require("mongoose");

const event = mongoose.Schema({
    ps: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    quantPart: {
        type: Number,
        required: true
    },
    users: {
        type: [String],
        required: true
    },
    acces: {
        type: [String],
        required: false
    }

})

module.exports = mongoose.model("event", event);