
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode , setThemeMode] = useState("Light")

  // ye 'lightTheme' and 'darkTheme' methods yaha define islie krr rhe hai coz hamne iske context mai bss declare kiya hai unki functionality too batayi hee nhi hai islie yaha define krdo unn methods ko jisse ye methods fiir accessible ho jaaenge sabhi childrens ko jo bhi childrens hai unn components ke jisme ye methods likhe hue hai wo
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme : CLassic JS sai hee krni hoti hai. LETS SEE : 
  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  } , [themeMode])
  // NOte : iss upper wale code ka hamare 'context' sai koi vasta nhi hai

  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card/>
          </div>
      </div>
  </div>
  </ThemeProvider>
  )
}

export default App
