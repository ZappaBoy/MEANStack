const express = require('express')
const router = express.Router()

let entity = require('../mongodb/models/Entity')

router.get('/healthcheck', function (req, res, next) {
    res.send('Backend Server: entity API module online')
})

router.post('/add', async function (req, res, next) {
    await entity.saveEntity(req.body)
        .then((status) => {
            res.status(200)
        })
        .catch((error) => {
            res.status(500)
            console.trace(error)
        })
    res.end()
})

router.post('/get', async function (req, res, next) {
    let entityData = await entity.getEntity(req.body.id)
        .then((entity, error) => {
            if (error) {
                res.status(500)
                res.end()
            }
            return entity
        })
    res.status(200)
    res.send(entityData)
    res.end()
})

router.post('/get-all', async function (req, res, next) {
    let entitiesData = await entity.getAllEntities()
        .then((entities, error) => {
            if (error) {
                res.status(500)
                res.end()
            }
            return entities
        })
    res.status(200)
    res.send(entitiesData)
    res.end()
})

module.exports = router
