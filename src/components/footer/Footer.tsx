import React from 'react';
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>
                ©2023 Next App. all rights reserved.
            </div>
            <div className={styles.social}>
                <Image src="/1.png" height={15} width={15} className={styles.icon} alt="Next App Facebook"/>
                <Image src="/2.png" height={15} width={15} className={styles.icon} alt="Next App"/>
                <Image src="/3.png" height={15} width={15} className={styles.icon} alt="Next App"/>
                <Image src="/4.png" height={15} width={15} className={styles.icon} alt="Next App"/>
            </div>
        </div>
    );
};

export default Footer;