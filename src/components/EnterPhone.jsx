import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const EnterPhone = ({action, close_all}) => {

    const options = ['+1', '+20', '+91', '+972'];

    const [option, setOption] = useState(options[0]);
    const [optionsView, setOptionsView] = useState(false);

    const handleOptionClick = (index) => {
        setOption(options[index]);
        toggleOptions();
    };

    const toggleOptions = () => {
        if (optionsView === true) {
            setOptionsView(false);
        } else {
            setOptionsView(true)
        }
    }

    return (
        <div className="popup-content">
            <Header close={close_all} title="Enter phone number" />
            <div className="main">
                <p className="main-text">
                    Please provide your mobile phone number to confirm your appointment booking.
                </p>
                <div className="base-wrapper">
                    <label htmlFor="phone">
                        Phone number
                        <div className="input-wrapper">
                            <div className="select">
                                <p className="selected-option" onClick={toggleOptions}>{option} <KeyboardArrowDownIcon /></p>
                                {
                                    optionsView && 
                                    <div className="options">
                                        <ul className="options-list">
                                            {options.map((option, index) => (
                                                <li key={index} className="option-item" onClick={() => handleOptionClick(index)}>
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>
                            <input type="phone" className="input" placeholder="Your phone number" />
                        </div>
                    </label>
                </div>
                <button className="btn-primary" onClick={action}>
                    Continue
                </button>
            </div>
            <Footer />
        </div>
    )
}