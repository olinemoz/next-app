import React from 'react';
import styles from "./page.module.css"
import Button from "@/components/Button/Button";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            {/*{data.map((item) => (*/}
                <Link href={`/blog/`} className={styles.container} key={""}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Minimal Single Product
                        </h1>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor explicabo minus nam omnis quae quas quis quisquam sit!
                        </p>
                    </div>
                </Link>
                <Link href={`/blog/`} className={styles.container} key={""}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Minimal Single Product
                        </h1>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor explicabo minus nam omnis quae quas quis quisquam sit!
                        </p>
                    </div>
                </Link>
                <Link href={`/blog/`} className={styles.container} key={""}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={"https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            Minimal Single Product
                        </h1>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque dolor explicabo minus nam omnis quae quas quis quisquam sit!
                        </p>
                    </div>
                </Link>
            {/*))}*/}
        </div>
    );
};

export default Blog;