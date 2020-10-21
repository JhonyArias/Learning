const Personaje = require('../models/Personaje')

async function addPersonaje(req,res){
   try {
    const {
        nombre,
        peleas,
        simbolo,
        poder,
        descripcion
    } = req.body

    const personaje = Personaje({
        nombre,
        peleas,
        simbolo,
        poder,
        descripcion
    })

    if(req.file){
        const {filename} = req.file
        personaje.setImgUrl(filename)
    }

    const personajeStored = await personaje.save()

    res.status(201).send({personajeStored})
   } catch (e) {
    res.status(500).send({message: e.message})  
   }
}

async function getPersonaje(req,res){
    const personaje = await Personaje.find().lean().exec()
    res.status(200).send({personaje})
}

module.exports ={
    addPersonaje,
    getPersonaje
} 

