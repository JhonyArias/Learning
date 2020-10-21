const mongoose = require('mongoose')
const {appConfig} = require('../config')
const Schema = mongoose.Schema

const PersonajeSchema = Schema({
    nombre: String,
    peleas: String,
    simbolo: String,
    poder: Number,
    imgUrl: String,
    descripcion: String
},{
    timestamps: true
})

PersonajeSchema.methods.setImgUrl = function setImgUrl(filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Personaje',PersonajeSchema)