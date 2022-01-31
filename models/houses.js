const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('houses', {
    description: {
        type: String,
        required: true
    },
    host: {
        type: ObjectId,
        ref: 'users'
    },
    location: {
        type: String,
        required: true
    },
    photos: [String],
    price: {
        type: Number,
        required: true
    },
    rooms: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})