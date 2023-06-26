"use client";
import React from 'react';
import styles from "./page.module.css"
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        await signIn("credentials", {email, password});
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}></h1>
            <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button className={styles.button}>Login</button>
            </form>
            <button onClick={() => signIn('google')} className={styles.button + " " + styles.google}>
                Login with Google
            </button>
            <span className={styles.or}>- OR -</span>
            <Link className={styles.link} href="/dashboard/register">
                Create new account
            </Link>
        </div>
    );
};

export default Login;