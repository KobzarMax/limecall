import React from "react";
import logo from '../assets/logo.png';

export const Footer = () => {


    return (
        <div className="footer">
            <p className="footer-text">
                We run on <img src={logo} alt="logo limecall" />
            </p>
        </div>
    )

}