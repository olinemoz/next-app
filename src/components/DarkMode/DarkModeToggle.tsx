"use client"
import React, {useContext} from 'react';
import styles from "./darkmode.module.css"
import {ThemeContext} from "@/context/ThemeContext";

const DarkModeToggle = () => {
    // @ts-ignore
    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🔆</div>
            <div className={styles.ball} style={mode === "light" ? {left: 2} : {right: 2}}/>
        </div>
    );
};

export default DarkModeToggle;