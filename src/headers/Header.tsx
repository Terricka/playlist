import React from "react";
import logo from '../img/logo.png'
import './header.scss'

function Header () {
    return (
        <header className="header">
            <img src={logo} alt="CNN logo"></img>
        </header>
    )
}

export default Header