// Import Packages
const express = require('express')
const router = express.Router()
const Users = require('../models/users')

//Create requests GET / POST
// // TEMPLATE FOR ALL REQUESTS:
// router.get('/', async (req, res, next) => {
//     try {

//     } catch (err) {
//         next(err)
//     }
// })


router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/login', async(req, res, next) => {
    console.log('login session starts')
    let user = await req.body
    req.login(user, (err) => {
        if (err) {
            throw err
        } else {
            console.log('logged in!')
                // after login go to the houses list page
            res.redirect('/houses')
        }
    })
})

router.post('/signup', async(req, res, next) => {
    try {
        let user = await Users.findOne({
            'email': req.body.email
        })
        if (user) {
            throw new Error('A user with this email is already registered')
        } else {
            let user = await Users.create(req.body)
            console.log('user created!')
                //login
            req.login(user, (err) => {
                if (err) {
                    throw err
                } else {
                    console.log('logged in!')
                        // after login go to the houses list page
                    res.redirect('/houses')
                }
            })
        }

    } catch (err) {
        next(err)
    }

})


router.get('/logout', (req, res, next) => {
    try {
        console.log('user logging out')
        req.logout()
        req.session.destroy(err => {
            if (err) {
                next(err)
            }
            res.clearCookie('connect.sid')
                // continue coding here
            res.redirect('/auth/login')
        })
    } catch (err) {
        next(err)
    }
})


module.exports = router