import React, {useState, useEffect} from 'react'
import {Modal, Container} from 'react-bulma-components'
import Header from './Header'
import AddButton from './AddButton'
import ListPersonajes from './ListPersonajes'
import Form from './Form'
import {savePersonaje, getPersonaje} from '../services'
import Loading from './Loading'


const PersonajeLayout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [personaje, setPersonaje] = useState([])

    async function loadPersonaje (){
        const response = await getPersonaje()       
        if(response.status === 200){
            setPersonaje(response.data.personaje)
            //console.log(response)
        }
        setIsLoading(false)
    }

    useEffect(() =>{
        loadPersonaje()
    },[])

    const handleSubmit = async (data) =>{
        await savePersonaje(data)
        loadPersonaje()
        setIsModalOpen(false)
    }
    return (
        <Container>
            <Header title = "Nanatsu no Taizai"/>
            <AddButton onClick={() => setIsModalOpen(true)}/>
            {
                isLoading && <Loading/>
            }
            {
                !isLoading && !personaje.length &&(
                    <h2 className="title has-text-centered">
                        No se ha creado ningun personaje
                    </h2>
                )
            }
            {
                !isLoading && personaje.length && <ListPersonajes personaje={personaje}/>
            }
            
            <Modal show = {isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Head showClose={false}>
                        <Modal.Card.Title>
                             Añadir Personaje
                        </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit}/>
                    </Modal.Card.Body> 
                </Modal.Card>
            </Modal>
            
        </Container>    
    )
}

export default PersonajeLayout