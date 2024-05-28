import { Link, useOutletContext } from "react-router-dom";
import "../style/Nav.css";

export default function Nav({ usuario, setUsuario}) {

  return (
    (
      (usuario) ?
        <nav>
          <div>
            <Link to="/menu">Menu</Link>
            <Link to="/admin/lugar">Añadir Lugar</Link>
            <Link to="/admin/datos">Añadir Datos</Link>
            <Link to="/admin/modificar">Modificar Datos</Link>
            <Link to="/login" onClick={() => setUsuario(null)}>Logout</Link>
          </div>
        </nav>
        :
        <nav>
          <div>
            <Link to="/menu">Menu</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
    )
  );
}
