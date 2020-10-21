import React from 'react'
import {Card, Columns, Content, Heading} from 'react-bulma-components'

const ListPersonajes = ({personaje}) => {
    return(
         <Columns>
            {
                personaje.map(({ descripcion,nombre,peleas,poder,_id,simbolo,imgUrl}) =>(
                    <Columns.Column size = {4} key={_id}>
                        <Card>
                            <Card.Image size="16by9" src={imgUrl}/>
                            <Card.Content>
                                <Content>
                                    <Heading>{nombre}</Heading>
                                    <Heading subtitle size={6}>Poder: {poder}</Heading>
                                    <Heading subtitle size={6}>Peleas: {peleas}</Heading>  
                                    <Heading subtitle size={6}>Simbolo: {simbolo}</Heading>                      
                                    <p>
                                        Descripcion: {descripcion}
                                    </p>
                                </Content>

                            </Card.Content>
                        </Card>
                    </Columns.Column>
                   
                ))
            }
         </Columns>
    )
}

export default ListPersonajes
