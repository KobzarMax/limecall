import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const MoreInfo = ({action, close_all}) => {

    const industries = ['Sales', 'Support', 'Billing'];
    const [industry, setIndusty] = useState('Industry');
    const [optionsView, setOptionsView] = useState(false);

    const selectIndustry = (index) => {
        setIndusty(industries[index]);
        toggleOptions();
    }

    const toggleOptions = () => {
        if (optionsView === true) {
            setOptionsView(false);
        } else {
            setOptionsView(true)
        }
    }

    return (
        <div className="popup-content" id="more-info">
            <Header close={close_all} title="More Info" />
            <div className="main">
                <input type="text" placeholder="Your Name*" />
                <input type="email" placeholder="Your Email*" />
                <div className="select-industry">
                    <p onClick={toggleOptions}>{industry} <KeyboardArrowDownIcon /></p>
                    {optionsView && <ul className="industies-list">
                        {industries.map((industy, index) => (
                            <li key={index} className="industy-item" onClick={() => selectIndustry(index)}>
                                {industy}
                            </li>
                        ))}
                    </ul>}
                    
                </div>
                <div>
                    <p className="main-text">
                        Why would you like an appointment?
                    </p>
                    <p className="main-subtext">
                        Tell us about your symptoms, condition, or reason for booking. This will be read at the time of your appointment. (0/280 characters)
                    </p>
                    <textarea name="additional-info" id="additional-info" rows="2"></textarea>
                </div>
                <button className="btn-primary" onClick={action}>
                    Submit
                </button>
            </div>
            <Footer />
        </div>
    )

}