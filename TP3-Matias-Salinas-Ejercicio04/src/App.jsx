import { useState } from 'react'
import './style.css'

function App() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [edad, setEdad] = useState(0)
  const [altura, setAltura] = useState(0)
  const [email, setEmail] = useState('')
  const [colorMensaje, setColorMensaje] = useState('#d00000')
  const [mensaje, setMensaje] = useState('Asegurese de satisfacer todos los requisitos.')

  const nombreYapellidoCheck = () => {
    return ((nombre.length > 0 && apellido.length > 0)&&((nombre.length + apellido.length) < 51))
  }
  const edadCheck = () =>{
    return (edad > 0 && edad > 18)
  }

  const alturaCheck = () => {
    return (altura > 0 && altura < 230)
  }
  const emailCheck = () =>{
    return (email.length > 0 && email.includes("@"))
  }

  const verificarCampos = (e) =>{
    if (nombreYapellidoCheck() && edadCheck() && alturaCheck() && emailCheck()){
      setColorMensaje('#9ef01a')
      setMensaje('Tus Datos Cumplen con todos los requisitos')
    }
    else{
      setColorMensaje('#d00000')
      setMensaje('Asegurese de satisfacer todos los requisitos.')
    }
    e.preventDefault()
  }
  return (
    <>
    <h1 className="titulo">Ejercicio 4 - Salinas Matias</h1>
      <div className="contenedor">
        <form onSubmit={verificarCampos}>

          <div className="labelYinput">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name='nombre' value={nombre} onChange={(e)=>setNombre(String(e.target.value))} />
          </div>

          <div className="labelYinput">
            <label htmlFor="apellido">Apellido:</label>
            <input type='text' name='apellido' value={apellido} onChange={(e)=>setApellido(String(e.target.value))} />
          </div>

          <div className="labelYinput">
            <label htmlFor="edad">Edad:</label>
            <input type="number" name='edad' value={edad} onChange={(e)=>setEdad(Number(e.target.value))} />
          </div>

          <div className="labelYinput">
            <label htmlFor="altura">Altura(CM):</label>
            <input type="number" name='altura' value={altura} onChange={(e)=>setAltura(Number(e.target.value))} />
          </div>

          <div className="labelYinput">
            <label htmlFor="email">email:</label>
            <input type="text" name='email' value={email} onChange={(e)=>setEmail(String(e.target.value))} />
          </div>

          <button type='sumbit'>Enviar</button>
        </form>
        <div className="validaciones">
          <p style={{color:colorMensaje}}>{mensaje}</p>
          <p style={{color:nombreYapellidoCheck() ? '#9ef01a':'#d00000'}}> El nombre y apellido no pueden estar vacíos y deben tener un máximo de 50 caracteres.</p>
          <p style={{color:edadCheck() ? '#9ef01a':'#d00000'}}>La edad no debe ser negativa pero también validar que no sea menor de edad.</p>
          <p style={{color:alturaCheck() ? '#9ef01a':'#d00000'}}>La altura no puede ser negativa y no puede ser mayor a 230 (cm).</p>
          <p style={{color:emailCheck() ? '#9ef01a':'#d00000'}}>El correo electrónico no puede estar vacío y debe incluir el '@'.</p>

        </div>
        
      </div>
    </>
  )
}

export default App
