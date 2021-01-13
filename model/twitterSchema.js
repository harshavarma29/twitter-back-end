const mongoose = require('mongoose');

const twitterSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false
    },
    statusid: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    timezone: {
        type: String,
        required: false
    },
    retweets: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('anyname', twitterSchema);