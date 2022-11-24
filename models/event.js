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
        required: false
    },
    users: {
        type: [Object],
        required: true
    },
    acces: {
        type: [Object],
        required: false
    }

})

module.exports = mongoose.model("event", event);