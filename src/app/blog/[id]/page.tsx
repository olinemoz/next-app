import React from 'react';
import styles from "./page.module.css"
import Image from "next/image";

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Minimal Single Product</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam autem consequuntur
                        distinctio dolorum fugit natus quasi quibusdam tempora ullam!
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>author</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={"https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg"}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam aut delectus dolorum
                    eum in minima quisquam reiciendis tenetur!
                </p>
            </div>
        </div>
    );
};

export default BlogPost;