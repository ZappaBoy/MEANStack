'use strict'

const entityModel = require('../Connection').models.entity

// async function saveEntity(entity) {
//     return new Promise((resolve, reject) => {
//         const entity = new entityModel(entity)
//         entity.save((error, data) => {
//             if (data !== null) {
//                 resolve(true)
//             } else {
//                 if (!error) {
//                     resolve(false)
//                 } else {
//                     reject(error)
//                 }
//             }
//         })
//     })
// }

async function saveEntity(entityData) {

    return new Promise((resolve, reject) => {
        const entity = new entityModel(entityData)

        entity.save((error, data) => {
            if (data !== null) {
                resolve(true)
            } else {
                if (!error) {
                    resolve(false)
                } else {
                    reject(error)
                }
            }
        })
    })
}

async function getEntity(id) {
    return new Promise((resolve, reject) => {
        entityModel.findOne({'id': id}, (error, data) => {
            if (data !== null) {
                const entity = new entityModel(data)
                resolve(entity)
            } else {
                if (!error) {
                    reject(error)
                } else {
                    reject(error)
                }
            }
        })
    })
}

async function getAllEntities() {
    return new Promise((resolve, reject) => {
        entityModel.find({}, (error, data) => {
            if (data !== null) {
                resolve(data);
            } else {
                if (!error) {
                    reject(error)
                } else {
                    reject(error)
                }
            }
        })
    })
}

async function changeEntity({entity}) {
    return new Promise((resolve, reject) => {
        resolve(entityModel.updateOne({'id': entity.id},
            {
                $set: {
                    'data': entity.data
                }
            })
            .lean().exec())
    })
}

module.exports = {
    saveEntity,
    getEntity,
    getAllEntities,
    changeEntity
}
