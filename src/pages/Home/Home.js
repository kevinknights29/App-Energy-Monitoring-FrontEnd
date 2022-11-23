import React from 'react'
import './Home.css'

function Home() {
  return (
    <React.Fragment>
      <header className='header'>
        <img
          class='demo-bg'
          src='https://assets.digitalocean.com/labs/images/community_bg.png'
          alt=''
        ></img>
        <h1>Solucion Monitoreo Energetico</h1>
        <p>Proyecto Social Ing. de Proyectos</p>
        <a href='Dashboard'>
          <button>Iniciar sesión</button>
        </a>
      </header>

      <div>
        <div className='content' id='problem'>
          <h2>Problematica</h2>
          <p className='fa1'>
            <img
              className='fa'
              src='https://www.nvinoticias.com/sites/default/files/styles/large/public/articulos/2022/May/estudian_a_oscuras.jpg.webp?itok=fxlY51Ac'
              alt=''
            ></img>
            Los problemas energéticos de Panamá están cada vez más relacionados
            con los ambientales, podemos decir que si mejoramos el cómo se
            utiliza la energía por medio de sistemas inteligentes de control
            automatizado podemos garantizar una disminución en el consumo total
            de las escuelas. Estas mismas están entre las principales fuentes de
            alta demanda seguido de empresas e industrias esto se debe porque
            muchas escuelas tienen un mal manejo de recursos y baja, poco o casi
            nula educación en el área de ahorro energético por lo tanto la
            implementación de nuestro sistema podría ayudar de manera
            significativa reduciendo costos de operación los cuales pueden ser
            redestinados y aprovechados de mejor manera. Estos pueden ser
            reinvertidos en estructuras, mantenimiento capacitación de personal,
            entre otros.

          </p>

        </div>
        <div className='content1' id='proposal'>
          <h2 >Propuesta</h2>
          <p className='f1'>
            <img
              className='f'
              src='https://ae01.alicdn.com/kf/Sceba899562b04ad8b2061bf7faabe677V.jpg?width=1100&height=581&hash=1681'
              alt=''
            ></img>
            El diseño y desarrollo de un sistema digital de medición inteligente
            en un centro educativo permite una solución para reducir el alto
            consumo y demanda de energía que existe en Panamá. Esta solución
            innovadora permitirá concientizar a la comunidad al ver el uso
            eficiente y sostenible de la energía lo que llevaría a un beneficio
            social, económico y ambiental ya que nos permite ir hacia un país
            más sostenible.
          </p>

        </div>
        <div className='content' id='objectives'>
          <h2>Objetivos</h2>
          <p className='fe1'>
            <img
              className='fe'
              src='https://mediahub.milenium.group/wp-content/uploads/2020/01/key-performance-indicators.jpg'
              alt=''
            ></img>
            Como desenlace inicial se logrará adquirir un registro de todos los
            problemas actuales que están presentes dentro de los esquemas
            eléctricos en el plantel o planteles educativos estudiados, lo cual
            conduce al criterio de selección de posibles mejoras realizables que
            consigan optimizar el sistema eléctrico una vez se consiga la
            automatización. Este sistema permitirá el transporte, simulación y
            prueba de los datos recolectados por los sensores para que los
            actuadores puedan llevar a cabo la acción de control. <br />
            Esto permite establecer un modelo más eficiente para modelar los
            distintos escenarios de trabajo tomando cuenta la calidez de la
            iluminación o cargas totales utilizadas que son necesarias para las
            distintas actividades a realizarse. La implementación permitirá
            reducir el gasto de consumo energético en términos de conseguir una
            posible reducción del tipo tarifario lo cual conduciría a un sistema
            de ahorro para cada respectivo plantel con el cual se puedan
            realizar las adecuaciones que se vean pertinentes.
          </p>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Home