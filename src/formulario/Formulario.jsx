import { useState } from "react";
import Alert from "../alert/Alert.jsx";

const Formulario =() => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [mostrar, setMostrar] = useState(false)
    const [alert, setAlert] = useState({message:'',color:''})

    const enviar = (event) => {
        event.preventDefault()
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === ''|| password2.trim() === '') {
            setMostrar(true)
            setAlert({message:'Completa todos los campos!', color:'danger'})
            return
        }
        event.preventDefault()
        if(password !== password2) {
            setMostrar(true)
            setAlert({message:'Contraseña incorrecta!', color:'danger'})
            return
        }
        setNombre('')
        setEmail('')
        setPassword('')
        setPassword2('')
        setMostrar(true)
        setAlert({message:'El registro ha sido exitoso!', color:'success'})
    }

    return(
        <>
    <form onSubmit={enviar}>
    <div className="mb-3">
        <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
    </div>
    <div className="mb-3">
        <input type="email" className="form-control" placeholder="tuemail@ejemplo.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" placeholder="Contraseña" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div className="mb-3">
        <input type="password" className="form-control" placeholder="Confirma tu contraseña" name="password2" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
    </div>
    <button type="submit" className="btn btn-success">Registrarse</button>

    </form>  
    {mostrar && <Alert message= {alert.message} color= {alert.color}/>}
    </>
    )
}


export default Formulario;