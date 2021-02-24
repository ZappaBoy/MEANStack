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
const PORT = 8888

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compression())
app.use(helmet())

let corsOptions = {
    origin: 'http://127.0.0.1'
};
app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', router)

app.use((req, res) => {
    res.status(404)
})

app.listen(PORT)
console.log('Server running on internal port: ' + PORT)

module.exports = app;
