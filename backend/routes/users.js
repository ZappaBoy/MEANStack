const express = require('express')
const router = express.Router()

let user = require('../mongodb/models/User')
const constant = require('../constants/userModelError')

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
          if (error === constant.USER_ERROR) {
            res.status(409)
          } else {
            res.status(500)
            console.trace(error)
          }
        })

    res.end()
})

router.post('/authenticate', async function (req, res, next) {
  await user.getUserData(req.body.username)
    .then((data, error) => {
      if (error) {
        res.status(500)
      } else if (data.password === req.body.password) { // TODO: To review
        res.status(200)
      } else {
        res.status(401)
      }
    })
    .catch((error) => {
      if (error === constant.USER_ERROR) {
        res.status(409)
      } else if (error === constant.USER_NOT_EXIST) {
        res.status(406)
      } else {
        res.status(500)
        console.trace(error)
      }
    })

  res.end()
})

module.exports = router
