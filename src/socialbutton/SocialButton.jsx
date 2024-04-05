import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const SocialButton = () => {
    return (
        <>
                <div className='iconos-redes-sociales'>
                    <div className='border1'>
                        <FontAwesomeIcon className='face' icon={faFacebook} />
                    </div>
                        <div className='border1'>
                            <FontAwesomeIcon className='git' icon={faGithub} />
                        </div>
                            <div className='border1'>
                                <FontAwesomeIcon className='linked' icon={faLinkedinIn} />
                            </div>
                </div>
                    <p>O usa tu email para registrarte</p>
        </>
    )
}



export default SocialButton;