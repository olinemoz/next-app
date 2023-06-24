import React from 'react';
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";


async function getData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {cache: 'no-store'});
    if (!response?.ok) {
        throw new Error('Failed to fetch data!')
    }
    return response.json();
}

const Blog = async () => {
    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map((item : any) => (
                <Link href={`/blog/${item?.id}`} className={styles.container} key={item?.id}>
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
                            {item?.type}
                        </h1>
                        <p className={styles.desc}>
                            {item?.body}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Blog;