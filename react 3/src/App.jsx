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
  const [error, setError] = useState("")
  const [succes, setSucces] = useState("")
  return (
    <>
      <Buscador/>
      <Listado lista={lista}/>
      <AlertComponent/>
      <Formulario setLista={setLista} lista={lista} setError={setError} setSucces={setSucces}/>
    </>
  )
}

export default App
