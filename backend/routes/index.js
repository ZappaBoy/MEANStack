const express = require('express')
const router = express.Router()
const users = require('./users')
const entity = require('./entity')

const USERS_ENDPOINTS = '/users'
const ENTITY_ENDPOINTS = '/entity'

router.get('/healthcheck', function(req, res, next) {
    res.send('Backend Server: default API module online')
});

router.use(USERS_ENDPOINTS, users)
router.use(ENTITY_ENDPOINTS, entity)

module.exports = router
