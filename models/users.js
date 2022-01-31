const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('users', {
    avatar: String,
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})