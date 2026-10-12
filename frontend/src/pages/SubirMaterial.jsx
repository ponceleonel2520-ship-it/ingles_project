import { useState } from 'react'
import { Link } from 'react-router-dom'

function SubirMaterial({ agregarMaterial }) {
  const [titulo, setTitulo] = useState('')
  const [nivel, setNivel] = useState('Básico')
  const [tipo, setTipo] = useState('PDF')
  const [descripcion, setDescripcion] = useState('')
  const [mensaje, setMensaje] = useState('')

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (titulo.trim() === '' || descripcion.trim() === '') {
      setMensaje('Por favor llena todos los campos.')
      return
    }

    agregarMaterial({ titulo, nivel, tipo, descripcion })
    setMensaje('¡Material guardado correctamente!')
    setTitulo('')
    setNivel('Básico')
    setTipo('PDF')
    setDescripcion('')
  }

  return (
    <section>
      <h2>Subir material</h2>
      <p>Llena el formulario para agregar nuevo material al curso.</p>

      <form onSubmit={manejarEnvio} className="formulario">
        <label>Título del material</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Ejemplo: Present Perfect"
        />

        <label>Nivel</label>
        <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option>Básico</option>
          <option>Intermedio</option>
          <option>Avanzado</option>
        </select>

        <label>Tipo de material</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option>PDF</option>
          <option>Video</option>
          <option>Documento</option>
          <option>Audio</option>
        </select>

        <label>Descripción</label>
        <textarea
          rows="4"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Escribe una breve descripción"
        />

        <button type="submit" className="boton">Guardar material</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <p><Link to="/materiales">Ver lista de material</Link></p>
    </section>
  )
}

export default SubirMaterial