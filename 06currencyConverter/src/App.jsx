import { useState } from 'react'
import {InputBox} from './components'  // Index file by default call hoti hai islie hame '/index.js' bhi likhne ki jrurat nhi hai '.components' ke aage.
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"
import './App.css'

function App() {
  const [amount, setAmount] = useState()
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)  // its totally our choice ki ham 'useState' ke parameter mai kya value dete hai '0' deni hai too '0' do 'empty string' deni hai too empty string too its totally our choice. SAME RULE APPLIES FOR 'setAmount' ALSO

  const currencyInfo = useCurrencyInfo(from)  // yaha hamne hamara banaya hua 'useCurrencyInfo' hook use kiya hai. 'currencyInfo' hame ekk Object hee too de rha hai jisme saai currencies ke names pade hai (key/ value pair deta hai object that we know)
  

  const options = Object.keys(currencyInfo) // API ko fetch krne par hame ekk object milta hai abb uss object mai sai hame keys hee too show krwani hai user ko. keys mai kya hai? -> keys mai hee too saari currencies ke names pade hai. abb user ko ham unn keys ki value thorina show krwaenge

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)  // ye and iske niche wali chij samaj aa rhi hai too bhi theek hai and nahi aa rhi too bhi thik hai coz inhe nhi dene par hamara result fiir change nhi hoga bss 'inr' to 'usd' ye wali option field hee change hogi 
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount (amount * currencyInfo[to])
  }


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                        // convertedAmount();
                      
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}  // is line ki vajah sai 'From' wale mai currency dropdowns change ho rha hai
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                             label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to} //zzzzzzzzzzzzzzzzz
                            amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
