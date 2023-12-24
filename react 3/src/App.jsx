import './App.css'
import AlertComponent from './components/Alert'
import Buscador from './components/Buscador'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { baseColaboradores } from './baseColaboradores'

function App() {

  return (
    <>
      <Buscador/>
      <Listado baseColaboradores={baseColaboradores}/>
      <AlertComponent/>
      <Formulario/>
    </>
  )
}

export default App
