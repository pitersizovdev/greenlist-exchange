import React from 'react';
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navPillWrapper}>
            <div className={styles.navPill}>
                <nav className={styles.navList}>
                    <span className={styles.navLogo}>Greenlist</span>
                    <ul className={styles.navUl}>
                        <li>Глвная</li>
                        <li>Новости</li>
                        <li>Обмен</li>
                        <li>Кабинет</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.navIndicatorGlow}></div>
        </div>
    );
}

export default NavBar;