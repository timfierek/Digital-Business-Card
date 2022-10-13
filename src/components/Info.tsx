import React from "react";
import styles from "../styles/Info.module.css";
import pfp from "../images/pfp1.jpg";

function Info() {
    return (
        <div>
            <img src={pfp} alt='' id={styles.headshot}></img>
            <h1 id={styles.name}>Tim Fierek</h1>
            <h2 id={styles.title}>Backend Engineer</h2>
            <h3 id={styles.url}>timfierek.com</h3>

            <div className={styles.buttonsContainer}>
                <a href="mailto: timothyfierek@gmail.com" className={styles.emailButton}>
                    <i className="fa-solid fa-envelope"></i>
                    <p>Email</p>
                </a>
                <a href="https://www.linkedin.com/in/tim-fierek/" className={styles.linkedinButton}>
                    <i className="fa-brands fa-linkedin"></i>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    );
}

export default Info