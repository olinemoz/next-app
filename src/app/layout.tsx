import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ThemeContextProvider from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Next App Blog',
    description: 'Next App Blog Description',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeContextProvider>
            <AuthProvider>
                <div className="container">
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </AuthProvider>
        </ThemeContextProvider>
        </body>
        </html>
    )
}
