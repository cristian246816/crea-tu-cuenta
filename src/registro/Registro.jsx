import Formulario from "../formulario/Formulario";
import SocialButton from "../socialbutton/SocialButton";

const Registro =() => {
    return(
        <>
        <div className='card-general'>
            <h1 className='titulo'>Crea una cuenta</h1>
        <SocialButton />
        <Formulario/>
        </div>
        </>
    )
}




export default Registro;