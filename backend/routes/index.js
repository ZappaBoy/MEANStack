const express = require('express')
const router = express.Router()
const users = require('./users')

const USERS_ENDPOINTS='/users'

router.get('/healthcheck', function(req, res, next) {
    res.send('Backend Server: default API module online')
});

router.use(USERS_ENDPOINTS, users)

module.exports = router
