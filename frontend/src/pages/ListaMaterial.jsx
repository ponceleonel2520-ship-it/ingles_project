import { Link } from 'react-router-dom'

function ListaMaterial({ materiales }) {
  return (
    <section>
      <h2>Lista de material</h2>
      <p>Total de materiales: {materiales.length}</p>

      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Nivel</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {materiales.map((m, i) => (
            <tr key={i}>
              <td>{m.titulo}</td>
              <td>{m.nivel}</td>
              <td>{m.tipo}</td>
              <td>{m.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><Link to="/subir-material">Agregar más material</Link></p>
    </section>
  )
}

export default ListaMaterial