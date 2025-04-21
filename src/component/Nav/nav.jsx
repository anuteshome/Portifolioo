import React from 'react';
import './nav.css';
// import './index.css';
import Pic from '../../assets/react.svg'

function Nav() {
    return (
        <div className='all_hero'>
            <div>
                <img src={Pic}/>

            </div >
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
            <div>
                <h1 className='toglle'>Tog</h1>
                <button>Github</button>
            </div>
        </div>
    );
}

export default Nav;