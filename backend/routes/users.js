const express = require('express')
const router = express.Router()

router.get('/healthcheck', function(req, res, next) {
    res.send('Backend Server: users API module online')
});

module.exports = router
