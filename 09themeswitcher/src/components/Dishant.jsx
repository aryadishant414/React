import React from 'react'
import useTheme from '../contexts/theme'


function Dishant() {
  const { themeMode  } = useTheme();
  console.log(`THEME MODE HAI : ${themeMode}`)  // jjust to check the current theme on our console
  return (
    // <div className="text-gray-900 bg-white dark:text-white dark:bg-gray-800">Dj BRAVO</div>   // ye CHATGPT SAI DEKHA THA BUT THIS IS NOT A GOOD WAY ESA MUJE LAGTA HAI
    <div className={themeMode === 'light' ? 'text-gray-900 bg-white' : 'text-white bg-gray-800'}>
    <h1>Dj BRAVO</h1>
  </div>
  )
}

export default Dishant