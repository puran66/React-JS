import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Navbar =()=>{
    return(
        <div className="nav">
            <div className="logo">FlowTech</div>
            <div className="nav-list">
                <ul className='lists'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="Follow">
                <FontAwesomeIcon icon={faEnvelope} className='Nav-icon'/> 
            </div>
        </div>
    )
}

export default Navbar;