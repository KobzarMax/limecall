import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import SendIcon from '@mui/icons-material/Send';

export const CallType = ({action, close_all, call_now, call_back, more_info }) => {


    return (
        <div className="popup-content">
            <Header close={close_all}  title="Pick call type" />
            <div className="main">
                <button className="btn call-type" onClick={call_now}>
                    <PhoneInTalkIcon /> Web call
                </button>
                <button className="btn call-type" onClick={call_back}>
                    <PhoneForwardedIcon /> Call me back
                </button>
                <button className="btn call-type" onClick={action}>
                    <PhoneCallbackIcon /> Call me now
                </button>
                <button className="btn call-type" onClick={more_info}>
                    <SendIcon /> Leave message
                </button>
            </div>
            <Footer />
        </div>
    )

}