import React from "react";
import styles from '../styles/About.module.css';

function About(){
    return(
        <div className={styles.About}>
            <h2 className={styles.aboutHeader}>About</h2>
            <p className={styles.aboutText}>
                I am a backend developer with a special interest
                in building scaled systems and functional RESTful 
                APIs and web services. I am always learning new 
                languages and technologies; right now I'm working
                on React.
            </p>
        </div>
    );
}

export default About;