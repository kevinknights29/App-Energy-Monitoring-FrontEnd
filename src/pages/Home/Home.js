import React from 'react'
import './Home.css'

function Home () {
  return (
    <React.Fragment>
      <header className='header'>
        <h1>Solucion Monitoreo Energetico</h1>
        <p>Proyecto Social Ing. de Proyectos</p>
        <button>Inicia Sesion</button>
      </header>

      <div>
        <div>
          <div className='content' id='problem'>
            <h2>Problematica</h2>
            <p>insertar texto</p>
            <img alt=''></img>
          </div>
          <div className='content' id='proposal'>
            <h2>Propuesta</h2>
            <p>insertar texto</p>
            <img alt=''></img>
          </div>
          <div className='content' id='objectives'>
            <h2>Objetivos</h2>
            <p>insertar texto</p>
            <img alt=''></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
