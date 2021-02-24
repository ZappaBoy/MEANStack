'use strict'

let credential = require('./DBCredential.json')

const username = process.env.MONGO_INITDB_ROOT_USERNAME || credential.db.username
const password = process.env.MONGO_INITDB_ROOT_PASSWORD || credential.db.password
const dbName = process.env.MONGO_INITDB_DATABASE || credential.db.dbName

const url = 'mongodb://' +
    username + ':' +
    password + '@' +
    credential.db.host + ':' +
    credential.db.port + '/' +
    dbName + '?authSource=' +
    credential.db.authSource

const mongoOptions = {
    user: username,
    pass: password,
    dbName: dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false
}

module.exports = {
    url,
    mongoOptions
}
