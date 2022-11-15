import Navbar from "./pages/Navbar"
import Sugerencias from "./pages/Sugerencias/Sugerencias"
import Inicio from "./pages/Inicio/Inicio"
import Calendario from "./pages/Calendario/Calendario"
import Manual from "./pages/Manual/Manual"
import Dashboard from "./pages/Dashboard/Dashboard"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Sugerencias" element={<Sugerencias />} />
          <Route path="/Calendario" element={<Calendario />} />
          <Route path="/Manual" element={<Manual />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
