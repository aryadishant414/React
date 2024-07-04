import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",  // act as a variable just like 'user' variable in 'UserContextProvider' wale privious example mai
    darkTheme: () => {}, // act as a method just like 'setUser' variable in 'UserContextProvider' wale privious example mai
    lightTheme: () => {}, // act as a method just like 'setUser' variable in 'UserContextProvider' wale privious example mai
})

export const ThemeProvider = ThemeContext.Provider


// this below is our "Custom Hook"
export default function useTheme() {
    return useContext(ThemeContext)
}