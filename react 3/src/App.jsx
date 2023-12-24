import './App.css'
import AlertComponent from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { baseColaboradores } from './baseColaboradores'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [lista, setLista] = useState(baseColaboradores)
  return (
    <>
      <Buscador/>
      <Listado lista={lista}/>
      <AlertComponent/>
      <Formulario/>
    </>
  )
}

export default App
