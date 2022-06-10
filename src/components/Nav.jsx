import { NavLink } from "react-router-dom"

export function Nav() { 
    return <nav>
        <ul>
            <li><NavLink to="/">Tienda</NavLink></li>
            <li><NavLink to="/sesion">Iniciar sesión</NavLink></li>
        </ul>
    </nav>
}

// Recibir por props el render de iniciar sesion, cerrar sesion
// Si mostrar o no el carrito de compras