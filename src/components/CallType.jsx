import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export const CallType = ({action}) => {


    return (
        <div className="popup-content">
            <Header title="Pick call type" />
            <div className="main">
                <button className="btn call-type">
                    <PhoneInTalkIcon /> Call me here
                </button>
                <button className="btn call-type" onClick={action}>
                    <PhoneCallbackIcon /> Call me now
                </button>
            </div>
            <Footer />
        </div>
    )

}