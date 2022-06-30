import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo_s.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"></img>
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan"></img>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            
        </Link>
        <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/majedalthonayan/">
                        <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/MajedAlthonayan">
                        <FontAwesomeIcon icon={ faGithub } color="#4d4d4e"></FontAwesomeIcon>
                    </a>
                </li>
                
            </ul>
    </div>
)

export default Sidebar