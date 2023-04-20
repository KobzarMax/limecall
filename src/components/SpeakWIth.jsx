import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SpeakWith = ({action, back, close_all}) => {


    return (
        <div className="popup-content">
            <Header close={close_all} title="Who would you like to speak with?" />
            <div className="main">
                <button className="btn call-type" onClick={action}>
                    Billing Team
                </button>
                <button className="btn call-type" onClick={action}>
                    Support Team
                </button>
                <button className="btn call-type" onClick={action}>
                    Sales Team
                </button>
                <button className="btn-primary" onClick={back}>
                    Back
                </button>
            </div>
            <Footer />
        </div>
    )

}