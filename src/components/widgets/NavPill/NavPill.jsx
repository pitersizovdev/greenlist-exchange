import React from 'react';
import styles from './navpill.module.css';

const NavPill = () => {
    return (
        <div className={styles.navPillWrapper}>
            <div className={styles.navIndicatorGlow}></div>
            <div className={styles.navPill}></div>
        </div>
    );
}

export default NavPill;