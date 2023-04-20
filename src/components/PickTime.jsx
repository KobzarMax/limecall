import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const PickTime = ({action, close_all}) => {

    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT' ];
    const dates = ['2', '3', '4', '5', '6', '7', '8'];
    const timeSlots = ['12:20', '12:30', '12:40', '12:50',];

    const [activeIndex, setActiveIndex] = useState(null);
    const [avaliadleView, setAvaliadleView] = useState(false);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
        if (index === 4) {
            setAvaliadleView(true);
        } else {
            setAvaliadleView(false);
        }
      };

    return (
        <div className="popup-content" id="pick-time">
            <Header close={close_all} title="Pick a suitable time" />
            <div className="main">
                <div className="calendar">
                    <div className="month">
                        April
                    </div>
                    <div className="days">
                        <ul className="days-list">
                            {days.map((day, index) => (
                                <li key={index} className="days-item">
                                    {day}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="dates">
                        <ul className="dates-list">
                            {dates.map((date, index) => (
                                <li
                                key={index}
                                className={`dates-item ${index === activeIndex ? 'active' : ''}`}
                                onClick={() => handleClick(index)}
                              >
                                {date}
                              </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {!avaliadleView && <div className="avaliable-time">
                    <div className="time-title">
                        Afternoon
                    </div>
                    <ul className="time-list">
                        {timeSlots.map((timeSlot, index) => (
                            <li key={index} className="time-item" onClick={action}>
                                {timeSlot} <KeyboardArrowDownIcon />
                            </li>
                        ))}
                    </ul>
                </div>}
                
                {avaliadleView && 

                    <div className="avaliable-time">
                        <p className="avaliale-title">
                            There are no appointments available on the date you’ve selected.
                        </p>
                        <p className="avaliable-subtitle">
                            Please choose another date.
                        </p>
                    </div>
                }
            </div>
            <Footer />
        </div>
    )

}