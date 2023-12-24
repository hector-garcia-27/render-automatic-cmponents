import './App.css'
import AlertComponent from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { baseColaboradores } from './components/baseColaboradores'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [lista, setLista] = useState(baseColaboradores)
  const [mantenerLista, setMantenerLista] = useState(lista)
  const [error, setError] = useState("")
  const [succes, setSucces] = useState("")
  return (
    <div className='requerimiento gap-3'>
    <div className='d-flex flex-column gap-2'>
      <h1>Lista de colaboradores</h1>
      <Buscador setLista={setLista} lista={lista} mantenerLista={mantenerLista}/>
      <Listado lista={lista}/>
    </div>
    <div className='d-flex flex-column gap-2'>
      <h3>Agregar colaborador</h3>
      <Formulario setMantenerLista={setMantenerLista} setLista={setLista} lista={lista} setError={setError} setSucces={setSucces}/>
      <AlertComponent error={error} succes={succes}/>
    </div>
    </div>
  )
}

export default App
