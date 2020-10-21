import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getPersonaje (){
    try {
        const response = await axios({
            url: `${baseUrl}/personaje`,
            method: 'GET'
        })

    return response
    } catch (e) {
        console.log(e)
    }
}

export async function savePersonaje (personajeData){
    try {
        const formData = new FormData()
        console.log(personajeData)
        formData.append('nombre', personajeData.nombre)
        formData.append('peleas', personajeData.peleas)
        formData.append('simbolo', personajeData.simbolo)
        formData.append('poder', personajeData.poder)
        formData.append('descripcion', personajeData.descripcion)
        formData.append('image', personajeData.image)

        const response = await axios({
            url: `${baseUrl}/personaje`,
            method: 'POST',
            data: personajeData,
        })

    return response
    } catch (e) {
        console.log(e)
    }
}