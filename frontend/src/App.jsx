import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import SubirMaterial from './pages/SubirMaterial.jsx'
import VerPuntuaciones from './pages/VerPuntuaciones.jsx'
import AlumnosInscritos from './pages/AlumnosInscritos.jsx'
import ListaMaterial from './pages/ListaMaterial.jsx'

function App() {
  const [materiales, setMateriales] = useState([
    { titulo: 'Verbo To Be', nivel: 'Básico', tipo: 'PDF', descripcion: 'Explicación y ejercicios del verbo To Be.' },
    { titulo: 'Present Simple', nivel: 'Básico', tipo: 'Video', descripcion: 'Video con ejemplos del presente simple.' },
    { titulo: 'Past Tense', nivel: 'Intermedio', tipo: 'Documento', descripcion: 'Guía de verbos regulares e irregulares.' },
  ])

  const agregarMaterial = (nuevo) => {
    setMateriales([...materiales, nuevo])
  }

  return (
    <div className="app">
      <header className="encabezado">
        <h1>Curso de Inglés</h1>
        <nav className="menu">
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/subir-material">Subir material</NavLink>
          <NavLink to="/puntuaciones">Ver puntuaciones</NavLink>
          <NavLink to="/alumnos">Alumnos inscritos</NavLink>
          <NavLink to="/materiales">Lista de material</NavLink>
        </nav>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/subir-material" element={<SubirMaterial agregarMaterial={agregarMaterial} />} />
          <Route path="/puntuaciones" element={<VerPuntuaciones />} />
          <Route path="/alumnos" element={<AlumnosInscritos />} />
          <Route path="/materiales" element={<ListaMaterial materiales={materiales} />} />
        </Routes>
      </main>

      <footer className="pie">

      </footer>
    </div>
  )
}

export default App