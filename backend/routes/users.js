const express = require('express')
const router = express.Router()

let user = require('../mongodb/models/User')

router.get('/healthcheck', function (req, res, next) {
    res.send('Backend Server: users API module online')
})

router.post('/register', async function (req, res, next) {
    let userData = {
        username: req.body.username,
        password: req.body.password,
        active: true
    }
    await user.saveUser(userData)
        .then((status) => {
            res.status(200)
        })
        .catch((error) => {
            if (error === -1) {
                res.status(409)
            } else {
                res.status(500)
                console.trace(error)
            }
        })

    res.end()
})

router.post('/authenticate', async function (req, res, next) {
    let password = await user.getUserData(req.body.username)
        .then((data, error) => {
            if (error) {
                res.status(500)
                res.end()
            }
            return data.password
        })

    if (password === req.body.password) {
        res.status(200)
    } else {
        res.status(401)
    }
    res.end()
})

module.exports = router
