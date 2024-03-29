require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes/index')

const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(compression())
app.use(helmet())

const PORT = process.env.PORT || 8888

const FRONTEND_ORIGINS = process.env.FRONTEND_ORIGINS.split(",") || 'localhost'
const FRONTEND_PORT = process.env.FRONTEND_PORT || '4200'
let ORIGINS = []

for (let i = 0; i < FRONTEND_ORIGINS.length; i++) {
    let origin = ('http://' + FRONTEND_ORIGINS[i] + ':' + FRONTEND_PORT)
    origin = origin.replace(/\s/g, '');
    ORIGINS.push(origin)
}

let corsOptions = {
    allowedHeaders: ['Content-Type'],
    preflightContinue: true,
    origin: ORIGINS
};
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', router)

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT)
console.log('Server running on internal port: ' + PORT)

module.exports = app;
