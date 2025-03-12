import Card from "./Card";
import MenuLateral from "./MenuLateral"; 
import { clientes } from "./database";
function ListadoClientes() {
  return (
    <div className="panel-control">
      <MenuLateral />
      <section className="panel-control-clientes">
        {
          clientes.map ((cliente)=>{
            return <Card type={'clientes'} cualquirNombre={cliente} />
          })
        }
      </section>
    </div>
  )
}

export default ListadoClientes