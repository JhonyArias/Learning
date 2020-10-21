const express = require('express')
const upload = require('../libs/storage')
const {addPersonaje,getPersonaje} = require('../controllers/personajeController')
const api = express.Router()

api.post('/personaje', upload.single('image'), addPersonaje)
api.get('/personaje',getPersonaje)

module.exports = api