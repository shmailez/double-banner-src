import { useState } from 'react';
import '../App.css';

const BannerDown = ({inView,  viewportWidth}) => {

    let visValue = JSON.parse(sessionStorage.getItem('vis'))
    if(visValue === null) {
        visValue = true
    }
    
    const [vis, setVis] = useState(visValue)

    const handle = () => {
        setVis(vis => !vis) 
        sessionStorage.setItem('vis', false);
    }

    return(
        <>
            {vis && <div className={inView ? "banner2-invis": "banner2"}>
                       {viewportWidth > 420 && <span className="banner-img2"></span>}
                        <ul>
                            <li>
                            <h2>Black Friday</h2>
                            </li>
                            <li>
                            <h3>10%OFF</h3>
                            </li>
                            <li>
                            <h4>Use code <span>10FRIDAY</span> at checkout</h4>
                            </li>
                            <li>
                            <button className='banner-shop-button2'>Shop now{viewportWidth > 420 && ' through Monday'}</button>
                            </li>
                        </ul>
                        <button className='banner-close-button' onClick={() => handle()}>X</button>
                    </div>
            }
        </>
    )
}

export default BannerDown