// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/', (req, res) => {
    res.send('houses')
})
router.get('/create', (req, res) => {
    res.send('houses')
})
router.get('/:id', (req, res) => {
    res.send('houses')
})
router.get('/:id/edit', (req, res) => {
    res.send('houses')
})
router.post('/', (req, res) => {
    res.send('houses')
})
router.patch('/:id', (req, res) => {
    res.send('houses')
})
router.delete('/:id', (req, res) => {
    res.send('houses')
})


module.exports = router