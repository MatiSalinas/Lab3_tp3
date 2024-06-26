import { useState } from 'react'
import './style.css'
import imagenBajoPeso from "./assets/img/ImcBajoPeso.png"
import imagenSobrePeso from "./assets/img/ImcSobrePeso.png"
import imagenPesoNormal from "./assets/img/ImcPesoNormal.png"
import imagenObesidad from "./assets/img/ImcObesidad.png"

function App() {
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [indiceMasaCorporal, setIMC] = useState(0)
  const [colorTexto,setColorTexto] = useState('#000000')
  const mensajes = {'mensajeBajoPeso':"Tu IMC es Menor a 18.5, Se trata de un nivel Bajo",
  'mensajePesoNormal':"Tu IMC esta entre 18.5 y 24.9, esta dentro de los niveles normales.",
  'mensajeSobrePeso':"Tu IMC Esta entre 25 y 29.9, se trata de un nivel de sobrepeso.",
  'mensajeObesidad':"Tu IMC supera o iguala los 30, se trata de un nivel de obesidad"
  }
  const [mensaje,setMensaje] = useState("")

  const calcularIMC = (e)=>{
    const imc = peso/(altura*altura)
    setIMC(imc)
    
    if (imc <18.5){
      setColorTexto("#ffb703")
      setMensaje(mensajes['mensajeBajoPeso'])
    }else if(imc<25){
      setColorTexto("#4CB944")
      setMensaje(mensajes['mensajePesoNormal'])
    }else if(imc<30){
      setColorTexto("#fb8500")
      setMensaje(mensajes['mensajeSobrePeso'])
    }else{
      setColorTexto("#d90429")
      setMensaje(mensajes['mensajeObesidad'])
    }

    e.preventDefault()

  }
  return (
    <>
    <h1 className='titulo'>Ejercicio 2 - Salinas Matias</h1>
    <div className="CalculadoraIMC">
      <form onSubmit={calcularIMC}>

        <h1>Calculadora Indice de Masa Corporal</h1>
        <div className="bloqueAltura">
        <label htmlFor="Altura">Tu Altura: </label>
        <input type="number" min={0} name='Altura' onChange={(e)=> setAltura(Number(e.target.value)/100)}/>
        <p>cm.</p>
        </div>

        <div className="bloquePeso">
        <label htmlFor="Peso">Tu Peso: </label>
        <input type="number" min={0} name='Peso' onChange={(e)=> setPeso(Number(e.target.value))}/>
        <p>Kg.</p>
        </div>
      <button type='submit'>Calcular</button>
      </form>
      <div className="resultados">
        <div className="imagenes">
          <img src={imagenBajoPeso} alt="Imagen De una persona de Bajo Peso" className='imgIMC' style={{filter: indiceMasaCorporal <18.5 ? 'drop-shadow(0 0 10px #B12809)':'none'}}/>
          <img src={imagenPesoNormal} alt="Imagen De una persona de Peso Normal" className='imgIMC' style={{filter: indiceMasaCorporal >= 18.5 && indiceMasaCorporal <25 ? 'drop-shadow(0 0 10px #4CB944)':'none'}}/>
          <img src={imagenSobrePeso} alt="Imagen De una persona de Bajo Peso" className='imgIMC'style={{filter: indiceMasaCorporal >= 25 && indiceMasaCorporal <30  ? 'drop-shadow(0 0 10px #F06543)':'none'}}/>
          <img src={imagenObesidad} alt="Imagen De una persona con obesidad" className='imgIMC'style={{filter: indiceMasaCorporal >30 ? 'drop-shadow(0 0 10px #B12809)':'none'}}/>
        </div>
        <p style={{color:colorTexto}}>Tu IMC es de: {indiceMasaCorporal} ,{mensaje}</p>
      </div>

      </div>
    </>
  )
}

export default App
