const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

// Create the results moodel
module.exports = mongoose.model('reviews', {
    author: {
        type: ObjectId,
        ref: 'users'
    },
    date: {
        type: Date,
        default: Date.now
    },
    house: {
        type: ObjectId,
        ref: 'houses'
    },
    rating: {
        type: Number
    }
})