import React from 'react'
import './header.css';

const Header = () => {
    return (
        <div>
            <div id='hea'>
                <div id='logo'></div>

                <div id='name'>
                    <h2>Machi On The Way</h2>
                    <p>Studen Profile | Map| ETA | Alerts |Attendence</p>
                </div>
                <div id='left'>
                    <p id='s'>Route <span id='r'><strong>R-07</strong></span></p>
                    <p id='s2'>Stop <span id='r2'> <strong>2</strong></span></p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header
