// Import Packages
const { query } = require('express');
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses')

//functions
// del property from obj if value is empty
const delEmptyProp = (obj) => {
    for (const prop in obj) {
        if (obj[prop] == '') { delete obj[prop] }
    }
    return obj
}




//Create requests GET / POST
router.get('/', async(req, res, next) => {
    try {
        // remove all empty filters from the query
        let query = delEmptyProp(req.query)
            // remove the sort filter from the query
        delete query.sort
            // if a price is selected create the correct query
        query.price ? query.price = { $lte: req.query.price } : null
        console.log('logged user is: ', req.user)
        console.log('looking for houses in the DB...')
        console.log('search filters (all): ', req.query)
        console.log('cleaned search filters: ', query)
        console.log('price sort: ', `${req.query.sort}`)
            // execute the query
        let houses = await Houses.find(query).sort(`${req.query.sort}`)
            // render the page
        res.render('houses/list', { user: req.user, houses: houses, filters: req.query })
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
            let house = await Houses.findById(req.params.id).populate('host')
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