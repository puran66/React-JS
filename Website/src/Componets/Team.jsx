import { Data } from './Data'
import './Team.css'
import {Link} from 'react-router-dom'
const Team = () => {
    return (
        <div class="responsive-container-block outer-container">
            <div class="responsive-container-block inner-container">
                <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-4 wk-ipadp-4 headings-container">
                    <p class="text-blk heading-text">
                        Meet our dream team
                    </p>
                    <p class="text-blk sub-heading-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla et sagittis,
                        vestibulum risus lacus sit.
                    </p>
                </div>
                <div class="responsive-cell-block wk-desk-8 wk-ipadp-8 wk-tab-12 wk-mobile-12 team-members-container">
                    {
                        Data.map((item) => {
                            return (
                                <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-mobile-12 wk-tab-12 card-container">
                                    <div class="card">
                                        <img class="card-img" src={item.imageLink} />
                                        <p class="text-blk name">
                                            {item.name}
                                        </p>
                                        <p class="text-blk position">
                                            {item.role}
                                        </p>
                                        <Link to={`/${item.role}`} >
                                        <button className='Button'>Know More...</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Team;