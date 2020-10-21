const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const personajeRoutes = require('./routes/personaje')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1',personajeRoutes)

module.exports = app