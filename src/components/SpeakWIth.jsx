import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const SpeakWith = ({action}) => {


    return (
        <div className="popup-content">
            <Header title="Who would you like to speak with?" />
            <div className="main">
                <button className="btn call-type">
                    Billing Team
                </button>
                <button className="btn call-type">
                    Support Team
                </button>
                <button className="btn call-type">
                    Sales Team
                </button>
                <button className="btn-primary">
                    Continue
                </button>
                <button className="btn-primary">
                    Back
                </button>
            </div>
            <Footer />
        </div>
    )

}