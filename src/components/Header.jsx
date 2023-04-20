import React from "react";
import logo from '../assets/logo.png';
import CloseIcon from '@mui/icons-material/Close';

export const Header = ({title, close}) => {


    return (
        <div className="header">
            <div className="head">
                <img src={logo} alt="logo limecall" />
                <CloseIcon className="close" onClick={close} />
            </div>
            <p className="popup-header">{title}</p>
        </div>
    )

}