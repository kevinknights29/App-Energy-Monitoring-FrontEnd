import "./Sugerencias.css"
import React from "react";
import Contenido1 from "./Contenido1";
import Contenido2 from "./Contenido2";
import Contenido3 from "./Contenido3";
import Contenido4 from "./Contenido4";
import Contenido5 from "./Contenido5";
import Contenido6 from "./Contenido6";
import Contenido7 from "./Contenido7";
import Contenido8 from "./Contenido8";
import Contenido9 from "./Contenido9";
import Contenido10 from "./Contenido10";


function Sugerencias() {
    return (
        <React.Fragment >
        <section  className="section">
          <div className="layout1">
            <div className="contenido1 centered">
              <Contenido1 />
            </div>
            <div className="contenido2 centered">
              <Contenido2 />
            </div>
            <div className="contenido3 centered">
              <Contenido3 />
            </div>
  
            <div className="contenido4 centered">
              <Contenido4 />
            </div>
            <div className="contenido5 centered">
              <Contenido5 />
            </div>
            <div className="contenido6 centered">
              <Contenido6 />
            </div>
  
            <div className="contenido7 centered">
              <Contenido7 />
            </div>
            <div className="contenido8 centered">
              <Contenido8 />
            </div>
            <div className="contenido9 centered">
              <Contenido9 />
            </div>
            <div className="contenido10 centered">
              <Contenido10 />
            </div>
            
          </div>
        </section>
      </React.Fragment>
    ) 
  }
  export default Sugerencias
  