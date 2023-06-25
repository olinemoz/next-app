import React from 'react';
import styles from "./page.module.css"
import Image from "next/image";
import {notFound} from "next/navigation";

interface Blog {
    params: {
        id: string | number
    }
}

const getData = async (postId : string | number) => {
    const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {cache: 'no-store'});
    if (!response?.ok) {
        return notFound();
    }
    return response.json();
}

export async function generateMetadata({ params: {id} } : Blog) {
    const data = await getData(id);
    return {
        title: `Oline ${data?.title}`,
        description: data?.desc
    }
}
const BlogPost: React.FC<Blog> = async ({params: {id}}) => {
    const data = await getData(id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data?.title}
                    </h1>
                    <p className={styles.desc}>
                        {data?.desc}
                    </p>
                    <div className={styles.author}>
                        <Image
                            src={"https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"}
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>{data?.username}</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src={data?.img}
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    {data?.content}
                </p>
            </div>
        </div>
    );
};

export default BlogPost;