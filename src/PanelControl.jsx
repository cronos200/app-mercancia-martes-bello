import Card from "./Card";
import MenuLateral from "./MenuLateral";
import { envios } from "./database";

function PanelControl() {
  return (
    <div className="panel-control">
      <MenuLateral />
      <section className="panel-control-section">
      {
          envios.map ((envio)=>{
            return <Card type={'envios'} cualquirNombre={envio} />
          })
        }
      </section>
    </div>
  )
}

export default PanelControl;