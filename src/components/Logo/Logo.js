import React from "react";
import { Link } from "react-router-dom";
import logotype from '../../images/logo.svg';
import './Logo.css';

function Logo () {
    return (
        <Link to="/" className="Link"> 
            <img src={logotype} alt="Best logo ever"/>
        </Link>
    )
}

export default Logo;