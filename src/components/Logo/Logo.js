import React from "react";
import logotype from '../../images/logo.svg';
import './Logo.css';

function Logo () {
    return (
        <div className='logo' >
            <img src={logotype} alt="Best logo ever"/>
        </div>
    )
}

export default Logo;