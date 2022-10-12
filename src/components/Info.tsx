import React from "react";
import "../styles/Info.css";
import pfp from "../images/pfp1.jpg";

function Info(){
    return(
        <div>
            <img src={pfp} alt='' className='profile-pic'></img>
            <h1>Tim Fierek</h1>
            <h2>Backend Engineer</h2>
            <h3>timfierek.com</h3>
        </div>
    );
}

export default Info