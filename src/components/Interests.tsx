import React from "react";
import styles from '../styles/Interests.module.css';

function Interests(){
    return(
        <div className={styles.Interests}>
            <h2 className={styles.interestsHeader}>Interests</h2>
            <p className={styles.interestsText}>
                Disc golf junkie. Book worm. Gamer.
                Coding fanatic. Enjoys food but hate cooking.
                Caffeine fiend.
            </p>
        </div>
    );
}

export default Interests;