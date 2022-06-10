import { useState } from "react";
import { useSelector } from "react-redux";
import { Login } from "../containers/Loggin";
import { Register } from "../containers/Register";

export function User() {
    const [register, setRegister] = useState(true)
    const data = useSelector(state => state.user)
    console.log(data);
    let login = false
    data.name ? login = true : login = false


    return <>
        {login ? <h3>Ya ha iniciado sesion </h3> :
            <div>
                <h3>{register ? 'Registrar usuario' : 'Iniciar sesion'}</h3>
                {register ?
                    <Register />

                    : <Login />}
                <button type="button" onClick={() => setRegister(register === true ? false : true)}>{register ? 'Iniciar sesion' : 'Registrarse'}</button>
            </div>}
        </>


}

// Inicialmente render registrar usuario si clickea ya tiene cuenta render iniciar sesion