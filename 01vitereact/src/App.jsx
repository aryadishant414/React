import Chai from "./chai"

function App() {
  const username = 'chai aur code'
  return (

    // Fragments => ye khaali openng and closing brackets jinhe hamne use kiya hai multiple tags ko iske andar daalne ke liye unhe hee fragments kaha hai.
    // NEED of Fragments => kyu daala hamne inn sabhi tags ko Fragments mai ? coz JSX(hmtl hee hai) kehti hai muje too ekk hee html element chahiye return mai. JSX multiple html elements accept nhi krti hai
    <>
    <Chai/>
    <h1>chaii aur reactt {username}</h1>
    <p>test para</p>
    </>
  )
}

export default App
