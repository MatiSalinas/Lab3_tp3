import { useState,useEffect } from 'react'
import './style.css'
import imagenDefault from "./assets/img/default_profile_picture.png"

function App() {

  const [listaPersonas, setListaPersonas] = useState([])
  const [listaTareas,setListaTareas] = useState([])
  const [bandera,setBandera] = useState(false)
  
  useEffect(()=>{
    const traerPersonas = async () =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if (res.ok){
        const nuevasPersonas = await res.json()
        setListaPersonas(nuevasPersonas)


      }
    }
    traerPersonas()
  },[])

  const traerTareas = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    if (res.ok){
      const nuevasTareas = await res.json()
      setListaTareas(nuevasTareas)
      setBandera(!bandera)
    }
  }
  return (
    <>
      <h1>Ejercicio 5 - Salinas Matias</h1>
<div className="contenedor">
  
          {listaPersonas.map( (persona)=>{
              return(
                <div className="cartas"key={persona.id}>
                    <div className="carta" >
                      <div className="cartaHeader">
                        <div className="cartaId">
                          {persona.id}
                        </div>
                        {persona.username}
                      </div>
                    <div className="cartaImagen">
                      <img src={imagenDefault} alt="foto default del user" className='fotoPerfil'/>
                    </div>
                    <div className="cartaInfo">
                    <p>Nombre:</p>{persona.name} <p>Email:</p>{persona.email} <p>Sitio Web:</p>{persona.website}
                    </div>
                    </div>

                    <div className="verTareas"><button className='botonTareas' onClick={()=>traerTareas(persona.id)}>Ver Tareas</button></div>

<div className="tareaRelativo">
  
                      <div className={listaTareas.length>0 ? ( listaTareas[0].userId== persona.id ? "tareas":"escondido"):'escondido'} >
                        <ul>
                        {listaTareas.map((tarea)=>{
                          return(
                            <li key={tarea.id} style={{color:tarea.completed ? 'green' : 'red',padding:'.3rem'}}>
                              {tarea.title}.
                              </li>
                              )
                        })}
                        </ul>
                      </div>
</div>


                </div>
              )
                  }
                      )
          }
</div>
    </>
  )
}

export default App
