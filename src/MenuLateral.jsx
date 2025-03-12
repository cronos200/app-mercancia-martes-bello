import userlogo from './assets/fondo.jpg'
function MenuLateral() {
  return (
    <aside className="panel-control-aside">
      <div>
        <img src={userlogo} alt="" />
      </div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </aside>
  )
}
export default MenuLateral