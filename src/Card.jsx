function Card({ cualquirNombre }) {
  return (
    <section className="card">
      <div>
        <p>Nombre: {cualquirNombre.nombre} </p>
        <p>Ciudad: {cualquirNombre.ciudad}</p>
        <p>Edad: {cualquirNombre.edad}</p>
      </div>
      <div>
        <p>Ver</p>
      </div>
    </section>
  )
}

export default Card

