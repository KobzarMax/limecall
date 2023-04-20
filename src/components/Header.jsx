import React from "react";
import logo from '../assets/logo.png';

export const Header = ({title}) => {


    return (
        <div className="header">
            <img src={logo} alt="logo limecall" />
            <p className="popup-header">{title}</p>
        </div>
    )

}