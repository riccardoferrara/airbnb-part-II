// // Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/', (req, res) => {
    res.redirect('/houses')
})

module.exports = router