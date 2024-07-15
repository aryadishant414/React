import React , {useId} from 'react'

// This whole 'InputBox.js' file was for creating the Input Field wala Box (Project run krke dekhlo jisme from/to , amount wagara ki fileds hai wo input box ko create kiya hai hamne)

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,  // ye isliye likha hai kyoki user amount de bhi skta hai and nhi bhi de skta hai its only his/her choice. BTW this field is not at all necessary. False ka mtlb hai ki hamm amount field mai kuch likh skte hai and agr true hota too hamm amount field mai kuch bhi enter nhi krr skte the
    currencyDisable = false,  // This field is also not necessary

    className = "",
}) {
   const amountInputId = useId()  // New type of 'Hook' i.e "useId" Hook


    return (
        // <></>
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor= {amountInputId} 
                 className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable} // iski koi jrurat thi nhi agr nhi likhna hai too mat likho
                    value={amount}
                    onChange={ (e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable} // iski koi jrurat thi nhi agr nhi likhna hai too mat likho
                >

                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                    {currency}
                    </option>

                ))}
                    
                        
                        
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
