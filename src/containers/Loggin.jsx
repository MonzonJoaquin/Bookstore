import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Form } from "../components/Form";
import { loginUserAPI, loginUser } from '../redux/Actions';

export function Login() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({})

    console.log('form', form);    

    const submit = () => {
        dispatch(loginUserAPI({name: form.email, password: form.password}))
        dispatch(loginUser({name: form.email, password: form.password}))
    }

    return <Form
        input={[
            { label: "Ingrese su e-mail", type: "email", id: "email", action: (e) => setForm({...form, [e.target.id]:e.target.value}), placeholder: "ejemplo@hotmail.com" },
            { label: "Ingrese su contrasenia", type: "password", id: "password", action: (e) => setForm({...form, [e.target.id]:e.target.value}), placeholder: "*********" },
        ]}
        submit={submit}
    />
}