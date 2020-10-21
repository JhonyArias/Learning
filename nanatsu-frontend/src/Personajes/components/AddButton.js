import React from 'react'
import {Container, Section, Button} from 'react-bulma-components'

const AddButton = ({onClick}) => {
    return(
        <Section>
            <Container>
                <div className = "is-pulled-right">
                     <Button onClick = {onClick} color ="primary">Añadir Personaje</Button>
                </div>
                
            </Container>
        </Section>
    )
}

export default AddButton