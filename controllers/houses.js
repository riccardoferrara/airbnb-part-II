// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')


//Create requests GET / POST
router.get('/', async(req, res, next) => {
    try {
        console.log('logged user is: ', req.user)
        console.log('looking for houses in the DB')
        console.log('search filters: ', req.query)
        let houses
            // let houses = await Houses.find({})
        if (req.query.rooms) {
            houses = await Houses.aggregate([
                { $match: { rooms: req.query.rooms } }
            ])
        } else {
            houses = await Houses.find({})
        }
        // console.log('found: ', houses)
        res.render('houses/list', { user: req.user, houses: houses })
    } catch (err) {
        next(err)
    }
})

router.get('/create', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.render('houses/create')
        }
    } catch (err) { next(err) }
})

router.get('/:id', async(req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            console.log('get house ID: ', req.params.id)
            let house = await Houses.findById(req.params.id)
            console.log('house: ', house)
            res.render('houses/one', { house, user: req.user })
        }
    } catch (err) { next(err) }
})

router.get('/:id/edit', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.render('houses/edit')
        }
    } catch (err) { next(err) }
})

router.post('/', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.render('houses/list')
        }
    } catch (err) { next(err) }
})

router.patch('/:id', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.send('patch house')
        }
    } catch (err) { next(err) }
})

router.delete('/:id', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.send('delte house')
        }
    } catch (err) { next(err) }
})

router.post('/create', async(req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            console.log('creating house')
            let house = await Houses.create(req.body)
            if (house) {
                console.log('house created')
                console.log('id: ', house._id)
                res.redirect('/houses/' + house._id)
            }
        }
    } catch (err) { next(err) }
})

module.exports = router