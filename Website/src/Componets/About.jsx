import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faReceipt, faCube, faImages, faShield } from '@fortawesome/free-solid-svg-icons'
import './About.css'

export const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h3 className='About-title'>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className='About-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul className='about-list'>
                    <li><FontAwesomeIcon icon={faCheckDouble} className='About-icon' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><FontAwesomeIcon icon={faCheckDouble} className='About-icon' /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><FontAwesomeIcon icon={faCheckDouble} className='About-icon' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
            </div>
            <div className="about-img">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/about.jpg" alt="AboutImg" />
            </div>
        </div>
    )
}
export const OverView = () => {
    return (
        <div className="about">
            <div className="about-img">
                <img src="https://bootstrapmade.com/demo/templates/Gp/assets/img/features.jpg" alt="OverView-Img" />
            </div>
            <div className="OverView-content">
                <div className="row">
                    <div className="row-icon">
                        <FontAwesomeIcon icon={faReceipt} className='OverView-icon' />
                    </div>
                    <div className="row-content">
                        <h4>Est labore ad</h4>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                </div>
                <div className="row">
                    <div className="row-icon">
                        <FontAwesomeIcon icon={faCube} className='OverView-icon' />
                    </div>
                    <div className="row-content">
                        <h4>Harum esse qui</h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                </div>
                <div className="row">
                    <div className="row-icon">
                        <FontAwesomeIcon icon={faImages} className='OverView-icon' />
                    </div>
                    <div className="row-content">
                        <h4>Aut occaecati</h4>
                        <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                </div>
                <div className="row">
                    <div className="row-icon">
                        <FontAwesomeIcon icon={faShield} className='OverView-icon' />
                    </div>
                    <div className="row-content">
                        <h4>Beatae veritatis</h4>
                        <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

