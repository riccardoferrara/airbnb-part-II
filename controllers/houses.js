// Import Packages
const express = require('express')
const router = express.Router()

//Create requests GET / POST
router.get('/', (req, res, next) => {
    try {
        console.log('logged user is: ', req.user)
        res.render('houses/list', { user: req.user })
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

router.get('/:id', (req, res, next) => {
    try {
        if (!req.isAuthenticated()) {
            res.render('auth/login')
        } else {
            res.send('houses/one')
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


module.exports = router