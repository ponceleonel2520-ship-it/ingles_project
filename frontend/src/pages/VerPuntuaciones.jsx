function VerPuntuaciones() {
  const puntuaciones = [
    { alumno: 'Ana López', examen: 'Unidad 1', calificacion: 9.5 },
    { alumno: 'Carlos Pérez', examen: 'Unidad 1', calificacion: 8.2 },
    { alumno: 'María García', examen: 'Unidad 1', calificacion: 8.8 },
    { alumno: 'Luis Hernández', examen: 'Unidad 1', calificacion: 7.0 },
  ]

  return (
    <section>
      <h2>Puntuaciones</h2>
      <p>Calificaciones obtenidas por los alumnos (de 0 a 100).</p>

      <table>
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Examen</th>
            <th>Calificación</th>
          </tr>
        </thead>
        <tbody>
          {puntuaciones.map((p, i) => (
            <tr key={i}>
              <td>{p.alumno}</td>
              <td>{p.examen}</td>
              <td>{p.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default VerPuntuaciones