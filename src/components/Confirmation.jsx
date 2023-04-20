import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";


export const Confirmation = ({back, close_all}) => {


    return (
        <div className="popup-content" id="confirmation">
            <Header close={close_all} title="Booking confirmation" />
            <div className="main">
                <div className="info">
                    <span className="info-name">Your Name:</span> <span className="info-value">User name</span>
                </div>
                <div className="info">
                    <span className="info-name">Your Emain:</span> <span className="info-value">example@gmail.com</span>
                </div>
                <div className="info">
                    <span className="info-name">Your Phone:</span> <span className="info-value">+1 777 777 777</span>
                </div>
                <div className="info">
                    <span className="info-name">Booked Date:</span> <span className="info-value">April 2, 2023. 14:00</span>
                </div>
                <button className="btn-primary">
                    Schedule
                </button>
                <button className="btn-primary" onClick={back}>
                    Back
                </button>
            </div>
            <Footer />
        </div>
    )

}