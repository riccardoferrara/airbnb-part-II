// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/', (req, res) => {
    res.render('houses/list')
})
router.get('/create', (req, res) => {
    res.render('houses/create')
})
router.get('/:id', (req, res) => {
    res.send('houses')
})
router.get('/:id/edit', (req, res) => {
    res.render('houses/edit')
})
router.post('/', (req, res) => {
    res.render('houses/list')
})
router.patch('/:id', (req, res) => {
    res.send('houses')
})
router.delete('/:id', (req, res) => {
    res.send('houses')
})


module.exports = router