import "./Grid.css"
import React from "react";
import Calendario1 from "./Calendario1.js";
import Cal1 from "./Cal1.js";

function Calendario() {
    return (
        <React.Fragment >
        <section  className="section">
          <div className="layout">
            <div className="Calendario1 centered">
              <Calendario1 />
            </div>
            <div className="Cal1 centered">
              <Cal1 />
            </div>
          </div>
        </section>
      </React.Fragment>
    ) 
  }
  export default Calendario
  