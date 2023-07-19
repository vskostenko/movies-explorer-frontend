import React from "react";
import { Link } from "react-router-dom";
import logotype from '../../images/logo.svg'

function Logo () {
    return (
        <Link className='logo' to='/'>
            <img src={logotype} alt="Best logo ever"/>
        </Link>
    )
}

export default Logo;