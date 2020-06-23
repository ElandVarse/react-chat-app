import React from 'react'

import { X } from 'react-feather';

import { Link } from 'react-router-dom'
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
            <Link to="/">
                <X color='white' size={20} />
            </Link>
        </div>
    </div>
    )


export default InfoBar;