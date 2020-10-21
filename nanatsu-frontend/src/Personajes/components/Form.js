import React, {useState, useRef} from 'react'
import {Form as BulmaForm, Button} from 'react-bulma-components'

const {Field, Control, Label, Input} = BulmaForm

const Form = ({handleSubmit}) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        peleas: '',
        simbolo: '',
        poder: '',
        descripcion: '',
    })

    const inputFileRef = useRef()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({ ...formValues, [name]: value})
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({ ...formValues, image: inputFileRef.current.files[0] })
        console.log(formValues)
        console.log(inputFileRef.current.files)
    }
    return (
        <form onSubmit={_handleSubmit}>
            <Field>
                <Label>Nombre</Label>
                <Control>
                    <Input
                        placeholder = "Ingrese un Nombre"
                        name="nombre"
                        value={formValues.nombre}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Peleas</Label>
                <Control>
                    <Input
                        placeholder = "Ingrese las peleas"
                        name="peleas"
                        value={formValues.peleas}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Simbolo</Label>
                <Control>
                    <Input
                        placeholder = "Ingrese el simbolo"
                        name="simbolo"
                        value={formValues.simbolo}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Poder</Label>
                <Control>
                    <Input
                        placeholder = "Ingrese el poder"
                        type = "number"
                        name="poder"
                        value={formValues.poder}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Descripcion</Label>
                <Control>
                    <Input
                        placeholder = "Ingrese una descripcion"
                        name="descripcion"
                        value={formValues.descripcion}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Imagen</Label>
                <Control>
                    <input type="file" ref = {inputFileRef}/>
                </Control>
            </Field>
            <Button type="submit" color = "primary">
                Guardar
            </Button>
        </form>
    )
}

export default Form