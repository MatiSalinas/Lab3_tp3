import { useState } from 'react'
import './style.css'

function App() {
  
  const [direccion,setdireccion] = useState('row')
  const [justificado,setJustificado] = useState('center')
  const [alineado,setAlineado] = useState('center')
  const [cantidadDivs,setCantidadDivs] = useState(3)

  const generarDivs = (cantidad) => {
    let divs = []
    for (let i = 0;i<cantidad;i++){
      divs.push(
        <div className="cubo" key={i}><p>{i+1}</p></div>
      )
    }
    return divs
  }
  return (
    <>
    <h1>Ejercicio 3 - Salinas Matias</h1>
    <div className="contenedor">
      
            <label htmlFor="Cantidad" defaultValue={3}>Cantidad divs</label>
            <select name="Cantidad" value={cantidadDivs}  onChange={(e)=>setCantidadDivs(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
      
            </select>
          
            <label htmlFor="flex-direction">Flex-direction</label>
            <select name="flex-direction" value={direccion}  onChange={(e)=>setdireccion(e.target.value)}>
              <option value="column">column</option>
              <option value="column-reverse">column-reverse</option>
              <option value="row">row</option>
              <option value="row-reverse">row-reverse</option>
            </select>
      
            <label htmlFor="justify-content">justify-content</label>
            <select name="justify-content" value={justificado}  onChange={(e)=>setJustificado(e.target.value)}>
              <option value="baseline">baseline</option>
              <option value="center">center</option>
              <option value="end">end</option>
              <option value="flex-end">flex-end</option>
              <option value="flex-start">flex-start</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="space-around">space-around</option>
              <option value="space-between">space-between</option>
              <option value="space-evenly">space-evenly</option>
              <option value="stretch">stretch</option>
      
              
            </select>
      
            <label htmlFor="align-items">align-items</label>
            <select name="align-items" value={alineado}  onChange={(e)=>setAlineado(e.target.value)}>
              <option value="baseline">baseline</option>
              <option value="center">center</option>
              <option value="end">end</option>
              <option value="flex-end">flex-end</option>
              <option value="flex-start">flex-start</option>
              <option value="left">left</option>
              <option value="right">right</option>
              <option value="start">start</option>
              <option value="normal">normal</option>
              <option value="stretch">stretch</option>
            </select>
          </div>
      <div className="demostracion" style={{flexDirection:direccion,justifyContent:justificado,alignItems:alineado}}>
      {generarDivs(cantidadDivs)}
      </div>
    </>
  )
}

export default App
