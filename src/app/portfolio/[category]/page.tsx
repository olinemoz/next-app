import React from 'react';
import styles from "./page.module.css"
import Button from "@/components/Button/Button";
import Image from "next/image";
import {items} from "@/app/portfolio/[category]/data";
import {notFound} from "next/navigation";


const getDataByCategory = (category: string) => {
    // @ts-ignore
    const data = items[category];
    if (data) {
        return data;
    }
    return notFound()
}

interface Item {
    id: string | number,
    image: string,
    title: string,
    desc: string
}
const Category = ({params}: { params: { category: string } }) => {

    const data = getDataByCategory(params?.category);

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params?.category}</h1>
            {
                data?.map((item : Item, index: number) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item?.title}</h1>
                            <p className={styles.desc}>{item?.desc}</p>
                            <Button text="See More" url="#"/>
                        </div>
                        <div className={styles.imgContainer}>
                            <Image
                                className={styles.img}
                                fill={true}
                                src={item?.image}
                                alt=""
                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Category;