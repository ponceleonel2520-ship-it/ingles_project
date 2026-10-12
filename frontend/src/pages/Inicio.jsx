import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <section>
      <h2>Bienvenido al Curso de Inglés</h2>
      <p>Desde aquí puedes administrar el material, las puntuaciones y los alumnos del curso.</p>

      <div className="tarjetas">
        <div className="tarjeta">
          <h3>Subir material</h3>
          <p>Agrega nuevo material de estudio para los alumnos.</p>
          <Link to="/subir-material" className="boton">Ir a Subir material</Link>
        </div>

        <div className="tarjeta">
          <h3>Ver puntuaciones</h3>
          <p>Consulta las calificaciones de cada alumno.</p>
          <Link to="/puntuaciones" className="boton">Ir a Puntuaciones</Link>
        </div>

        <div className="tarjeta">
          <h3>Alumnos inscritos</h3>
          <p>Revisa la lista de alumnos del curso.</p>
          <Link to="/alumnos" className="boton">Ir a Alumnos</Link>
        </div>

        <div className="tarjeta">
          <h3>Lista de material</h3>
          <p>Mira todo el material disponible.</p>
          <Link to="/materiales" className="boton">Ir a Material</Link>
        </div>
      </div>
    </section>
  )
}

export default Inicio