import React from 'react'

import closeIcon from '../../assets/closeIcon.png'
import onlineIcon from '../../assets/onlineIcon.png'

import './InfoBar.css'

const InfoBar = ( {room} ) => (

    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon} alt="online" className="onlineIcon"/>
            <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
            <a href="/"> <img src={closeIcon} alt="close"/> </a>
        </div>
    </div>
    )


export default InfoBar;