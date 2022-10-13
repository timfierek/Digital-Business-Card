import React from "react";
import styles from '../styles/Footer.module.css';
import facebookIcon from "../images/FacebookIcon.png";
import twitterIcon from "../images/TwitterIcon.png";
import instagramIcon from "../images/InstagramIcon.png";
import githubIcon from "../images/GitHubIcon.png";

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <a href="twitter.com" className={styles.iconContainer}>
                <img src={twitterIcon} alt="" className={styles.icon}/>
            </a>
            <a href="facebook.com" className={styles.iconContainer}>
                <img src={facebookIcon} alt="" className={styles.icon}/>
            </a>
            <a href="instagram.com" className={styles.iconContainer}>
                <img src={instagramIcon} alt="" className={styles.icon}/>
            </a>
            <a href="https://github.com/timfierek" className={styles.iconContainer}>
                <img src={githubIcon} alt="" className={styles.icon}/>
            </a>
        </div>
    );
}

export default Footer;