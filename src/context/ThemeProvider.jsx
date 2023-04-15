import React, { useState, useContext, useEffect } from 'react';
import { changeCssVariables } from '@services/changeCssVariables';
import { getLocalStorage } from "@utils/localStorage";

export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const THEME_NEITRAL = 'neitral';

const ThemeContext = React.createContext();

let startTheme = getLocalStorage('theme');

export const ThemeProvider = ({ children, ...props }) => {
    
    const [theme, setTheme] = useState(null);
    
    useEffect(() => {
    setTheme(startTheme);
    changeCssVariables(startTheme);
    }, [])
    
    const change = name => {
    setTheme(name);
    changeCssVariables(name);
    }
    return (
		<ThemeContext.Provider
            value={{
                theme,
                change
            }}
			{...props}
		>
            { children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);