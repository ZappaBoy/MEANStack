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

const FRONTEND_IP = process.env.FRONTEND_IP || 'localhost'
const FRONTEND_PORT = process.env.FRONTEND_PORT || '4200'
const FRONTEND_ORIGIN = '*' //'http://' + FRONTEND_IP + ':' + FRONTEND_PORT

let corsOptions = {
    allowedHeaders: ['Content-Type'],
    preflightContinue: true,
    origin: FRONTEND_ORIGIN
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
