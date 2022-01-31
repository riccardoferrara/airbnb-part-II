// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.post('/', (req, res) => {
    res.send('reviews')
})

module.exports = router