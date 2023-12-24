import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Formulario = ({ lista, setLista, setError, setSucces }) => {
  const [form, setForm] = useState({})
    
    const agregarColaborador = (evento) => {
        evento.preventDefault()
        if (!form.nombre || !form.correo || !form.edad || !form.cargo || !form.telefono) {
            setError("Los campos no pueden estar vacios")
            setSucces("")
            return
        } else {
            const nuevaBase = [...lista, form];
            setLista(nuevaBase)
            setForm({ id: "", nombre: "", correo: "", edad: "", cargo: "", telefono: "" })
            setError("")
            setSucces("El Colaborador se ha agregado con exito")
        }
    }

    const capturaInput = (evento) => {
        setForm({ ...form, [evento.target.name]: evento.target.value })
        console.log(form)
    }
    return (
        <form className='d-flex flex-column gap-1' onSubmit={agregarColaborador}>
            <input onChange={capturaInput} name='nombre' value={form.nombre} type="text" placeholder='Nombre' />
            <input onChange={capturaInput} name='correo' value={form.correo} type="text" placeholder='tucorreo@example.com' />
            <input onChange={capturaInput} name='edad' value={form.edad} type="text" placeholder='Edad' />
            <input onChange={capturaInput} name='cargo' value={form.cargo} type="text" placeholder='Cargo' />
            <input onChange={capturaInput} name='telefono' value={form.telefono} type="text" placeholder='Telefono' />
            <Button variant="outline-success" type='submit'>Agregar colaborador</Button>
        </form>
    )
}

export default Formulario

