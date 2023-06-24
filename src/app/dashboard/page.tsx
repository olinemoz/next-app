"use client";
import React, {useEffect, useState} from 'react';
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
    // @ts-ignore
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    console.log("data: ",data);
    console.log("isLoading: ",isLoading);
    console.log("error: ",error);

    return (
        <div className={styles.container}>
            dashboard
        </div>
    );
};

export default Dashboard;