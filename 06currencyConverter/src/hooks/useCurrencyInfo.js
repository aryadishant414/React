import { useEffect , useState } from "react"; // yaha ye hamara khudka hook bananne ke liye ham inn 2 hooks ka use krr rhe hai


// hook basically hota kuch nhi hai ekk function hee hota hai jo ki koi data return krta hai
// so yaha iss project mai hammne hamara khudka hook ('useCurrency') islie banaya hai kyoki ham hamari 'API' ko call krwana chahte hai jisme saari currencies ka data pada hai object ki form mai. hamne isme 'useEffect' hook ka use isliye kiya hai kyoki ham 'APi' ko harr baar call krwana chahte hai jab bhi koi minimal saa bhi change ho hamare input wale field banaye hue currencyConverter app mai
function useCurrencyInfo(currency) {
    const [data , setData] = useState({})
    useEffect( () => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then( (res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    } , [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;

