import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../components/Form";
import { loginUser, registerUser } from "../redux/Actions";

export function Register() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({password:'',repassword:''})

    const submit = () => {
        registerUser({ name: form.email, password: form.repassword })
        dispatch(loginUser({ name: form.email, job: 'Developer' }))
    }
    return <>
        <Form
            input={[
                { label: "Ingrese su e-mail", type: "email", id: "email", action: (e) => setForm({ ...form, [e.target.id]: e.target.value }), placeholder: "ejemplo@hotmail.com" },
                { label: "Ingrese su contrasenia", type: "password", id: "password", action: (e) => setForm({ ...form, [e.target.id]: e.target.value }), placeholder: "*********" },
                { label: "Ingrese su contrasenia", type: "password", id: "repassword", action: (e) => setForm({ ...form, [e.target.id]: e.target.value }), placeholder: "*********" },
            ]
            }
            submit={submit}
        />
        {form.password === form.repassword ?null:'Las contraseñas no coinciden'}
    </>

}

// label type id action placeholder