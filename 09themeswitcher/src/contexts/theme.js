import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",  // hamne banaya hai act as a variable just like 'user' variable in 'UserContextProvider' wale privious example mai
    darkTheme: () => {}, // hamne banaya hai act as a method just like 'setUser' variable in 'UserContextProvider' wale privious example mai
    lightTheme: () => {}, //hamne banaya hai act as a method just like 'setUser' variable in 'UserContextProvider' wale privious example mai
})

export const ThemeProvider = ThemeContext.Provider


// this below is our "Custom Hook" and ye hook hamare banaye hue 'context' ko use krr rha hai
export default function useTheme() {
    return useContext(ThemeContext)
}