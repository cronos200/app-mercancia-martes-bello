function Card({ type, cualquirNombre }) {
  return (
    <section className="card">
      <div>
        {
          (type === 'evios') ? (
            <div>
            <p>Origen: {cualquirNombre.origen} </p>
            <p>Destino: {cualquirNombre.destino}</p>
            </div>
          ) : (
            <div>
            <p>Nombre: {cualquirNombre.nombre}</p>
            <p>Edad: {cualquirNombre.edad}</p>
            <p>Ciudad: {cualquirNombre.ciudad}</p>
            </div>
          )
        }
      </div>
      <div>
        <p>Ver</p>
      </div>
    </section>
  )
}

export default Card

