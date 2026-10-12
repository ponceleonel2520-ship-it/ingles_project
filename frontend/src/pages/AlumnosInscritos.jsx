function AlumnosInscritos() {
  const alumnos = [
    { id: 1, nombre: 'Ana López', nivel: 'Básico' },
    { id: 2, nombre: 'Carlos Pérez', nivel: 'Intermedio' },
    { id: 3, nombre: 'María García', nivel: 'Básico' },
    { id: 4, nombre: 'Luis Hernández', nivel: 'Avanzado' },
  ]

  return (
    <section>
      <h2>Alumnos inscritos</h2>
      <p>Total de alumnos: {alumnos.length}</p>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Nombre</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombre}</td>
              <td>{a.nivel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default AlumnosInscritos