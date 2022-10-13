import React from "react";
import "../styles/Info.module.css";
import pfp from "../images/pfp1.jpg";

function Info() {
    return (
        <div>
            <img src={pfp} alt='' className='profile-pic'></img>
            <h1>Tim Fierek</h1>
            <h2>Backend Engineer</h2>
            <h3>timfierek.com</h3>

            <div className="buttons-container">
                <a href="mailto: timothyfierek@gmail.com" className="email-button">
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/tim-fierek/" className="linkedin-button">
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    );
}

export default Info