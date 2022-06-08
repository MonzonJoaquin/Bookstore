import { NavLink } from "react-router-dom"

export function Nav() {
    return <nav>
        <ul>
            <li><NavLink to="/">Tienda</NavLink></li>
            <li><NavLink to="/pedidos">Mi pedido</NavLink></li>
            <li><NavLink to="/sesion">Iniciar sesión</NavLink></li>
        </ul>
    </nav>
}