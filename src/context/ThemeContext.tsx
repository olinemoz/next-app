"use client"
import React, {createContext, useState} from 'react';

export type Mode = 'dark' | 'light';

export interface ThemeContextProps {
    mode: string;
    toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | string>('')
const ThemeContextProvider = ({children}: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<Mode>("dark");

    const toggle = () => {
        setMode(prevState => prevState === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{mode, toggle}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;