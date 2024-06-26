import { useState } from 'react'
import './style.css'
function App() {
  const [botonIzquierdo,setBotonIzquierdo] = useState(false)
  const [botonDerecho,setBotonDerecho] = useState(true)
  const [botonCentro,setBotonCentro] = useState(true)
  
  const alternarBotones = (boton) =>{
    switch (boton) {
      case 'izquierdo':
        setBotonIzquierdo(true)
        setBotonCentro(false)
        break;

      case 'centro':
        setBotonCentro(true)
        setBotonDerecho(false)
        break;
      case 'derecho':
        setBotonIzquierdo(false)
        setBotonDerecho(true)
        break;
    
      default:
        break;
    }
  }
  return (

    <>
      <h1>Ejercicio 1 - Salinas Matias</h1>
      <div className="bloque">
      <button onClick={()=> alternarBotones('izquierdo')} disabled={botonIzquierdo} className='botones' id='izq'>Izquierdo</button>
      <button onClick={()=> alternarBotones('centro')} disabled={botonCentro} className='botones' id='centro'>Centro</button>
      <button onClick={()=> alternarBotones('derecho')} disabled={botonDerecho} className='botones' id='der'>Derecho</button>
      </div>
    </>
  )
}

export default App
