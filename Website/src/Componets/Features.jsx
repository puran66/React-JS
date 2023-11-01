import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore ,faChartColumn,faCalendar,faPaintBrush,faDatabase} from '@fortawesome/free-solid-svg-icons'

export const Feature = () => {
    return (
        <div className="features">
            <div className="feature">
                <div className='Feature-item'>
                <FontAwesomeIcon icon={faStore} className='Feature-icon' />
                <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className="feature">
                <div className='Feature-item'>
                <FontAwesomeIcon icon={faChartColumn} className='Feature-icon' />
                <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className="feature">
                <div className='Feature-item'>
                <div><div><FontAwesomeIcon icon={faCalendar} className='Feature-icon' />
                <p>Lorem Ipsum</p></div></div>
                </div>
            </div>
            <div className="feature">
                <div className='Feature-item'>
                <FontAwesomeIcon icon={faPaintBrush} className='Feature-icon' />
                <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className="feature">
                <div className='Feature-item'>
                <FontAwesomeIcon icon={faDatabase} className='Feature-icon' />
                <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    )
}