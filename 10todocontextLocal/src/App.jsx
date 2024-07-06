
import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'  // sirf main folder ka hee name diya hai jisme 'Todoprovider' pada hai. but generally too hame poora path dena padta hai, too esa possible kese ho rha hai? IT is possible coz of 'index.js' file kyoki bydefault ye 'index' name ki file ko le leta hai behind the scenes mai. and hamne hamri 'index.js' file mai Todoprovider' ko import krwa rkha hai already. AGR HAME CHAHE TOO POOORA PATH BHI DE SKTE HAI ITS OUR CHOICE  
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev , {id: Date.now() , ...todo}]) //iss line sai hua kya hai ki : hamne 'setTodos' wale method ke parameter mai ekk call back diya hai jo ki previous agr kuch data pada hai 'todos' variable ke andar too wo bhi store krwa lenge ekk array ke andar. TOO '...' ka mtlb hota hai SPREAD OPERATOR in Javascript ye kya krta hai ki jo bhi spread operator ke saath likha hai uski values ko spread krleta hai too in our case '...prev' ka mtlb hai ki AGR 'todos' ke andar koi pehle sai hee values padi 
    // hai too usse leke iss array mai spread krwado. NOW what this mean : "{id: Date.now() , ...todo}" => isko hamne ekk object ke andar islie liye hai kyoki ham jo TODO user sai input field ke through accept krr rhe hai uske multiple values hai (see from 'TodoContext.js' file) and wo sab ekk object mai hai islie. Abb ye : 'id: Date.now()' iska mtlb hai ki jo bhi 'todo' user ne create krke submit kiya hai usko ekk id bhi too deni pdegi abb wo 'id' ko unique dene ke liye hamne 'Date.now()' ka use kiya jisse hame harr baar ekk unique id mile abb YE KYA HAI :  '...todo' => ISKA MTLB HAI ki yaha jo user ne 'todo' submit create kiya hai usse store krke spread krwado.
    // OVERALL ISS POORI LINE KA MTLAB HAI KI : agr koi values pehle sai hee padi hai 'todos' mai too unhe yaha iss array mai store krwado and naye wale todo ki unique id ke saath naye wale todo ko bhi store krwado. NOTE : id hamne islie likhi hai kyoki id too automatically hame generate krwani pdegi abb UNIQUE id too user khud generate krne sai raha
  }

  const updateTodo = (id , todo) => {
    // we know ki 'todos' hamara ekk array hai too hamne ekk 'LOOP' lagana padega ki array mai konsi waali id ka 'todo' hamm update krna chahte hai and jese hee wo id mill jaati hai usme ye 'todo' daal denge jo "updateTodo" mai aa rha hai
    setTodos((prev) => prev.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)))
  }  // iss upper code mai kya hua hai : 'updateTodo' ke andar ekk callback lagaya hai and ye callback 2 parameters lega (hame kese pata? => its coz 'TodoContext.js' context mai hamne already define kra hua hai islie). first parameter is 'id' which means ki jiss todo ko hamm update krna chah rhe hai uski id yeh id hai. The second parameter in update to do is 'todo' yeh wo todo hai wo ham add (basically poorane wale todo ki jagah update krna chaah rhe hai) krna chah rhe. ABB iss call back ke andar 'setTodos' method ke anadr ekk parameter hai 'prev' which means ki jitne bhi previous 'todos' pde hai wo todos (hamare saare todos 'Array' mai store pade hai). abb iske aage hai 'prev.map' iska mtlb hai ki hamm ekk 'Loop' lagana chaah rhe hai poorane jitne bhi todos pade hai usme NOW ISKE AAGE 'eachTodo' means loop krne par mai jo single element mila hai wo. ABB check krr rhe hai ki kya yeh singl todo ki 'ID' same hai hamm jiss 'todo' par abhi currently khade hai agr same hai too 'todo' (parameter of 'updateTodo') ko add krlo isski jagah(jisss todo par loop par hamm khade hai) ELSE 'prevTodo' means koi change mat kro vhi todo rehne do iss jagah par too


  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachTodo) => eachTodo.id !==id))
  }
  // NOTE : maps ko acha tarika nhi maante hai isliye we will be using 'filter' instead of maps
  // In this upper code we have used 'filter' filter ko bhi hamm 'Loops' ke jese hee maan skte hai bss ye kya krta hai chijo ko filter krdeta hai. MEANS The filter() method is used to create a new array with all elements that pass the test implemented by the provided function. WE know hame ekk hee element (i.e 'single to do') ko delete krna hai baki poora array as it is rkhna hai. HAMM esaaa bhi too bol skte hai na ki muje ekk new array banake dedo jisme saari values ho bss ekk value nhi ho i.e 'jo id dii hai wo id naa ho'
  // TOO ISS UPPER WALE METHOD NE EKK NAYA ARRAY CREATE KRLIYA HAI JISME SIRF WO SINGLE ELEMENT PRESENT NHI HAI JISKI ID HAMNE ISS FUNCTION STARTING MAI PASS KRI THi


  // Ye niche wala is the main important chij i.e jo 'hamare' todo' ke uppr line bana deta hai na wo functionality hai ye
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((eachTodo) => eachTodo.id === id ? {...eachTodo , completed: !eachTodo.completed} : eachTodo))
  }

  // YAHA SAI START HOTA HAI 'Local Storage' ka concept or khtm bhi yahipe hogya. MTLB YE hai ki local storage mai as such itna kuch hai nhi. BSS ham get krte hai and setkrte hai. READ krlena about Local Storage from w3 schools. NOTE : Local storage concept is same in Javascript also and in react also.
  // NOTE : React mai hame 'Local Storage' ko directly access krne ko milta hai . jab tak hamm client side par hai tab tooo ham local storage ko directly access krr skte hai but server side par nhi krr skte hai. OBVIOUS hai agr hamm server ki baat krrr rhe hai too Server kaha hee kuch local hota hai jo

  // ALREADY JO 'TODOs' PAde hai local storage mai unhe screen par users ko show krne ka kaam ye wala 'useEffect' krr rha hai jese hee user application open kre wese hee
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  // NOTE : Ham multiple 'useEffect' use krr skte hai ekk hee project mai bhi
  // Like this : 
// YE SET KRR RHA HAI LOCAL STORAGE PAR 'TOdo' JO KI USER NE DAALA HAI
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])

  // NOTE : hame pehle get krna hai fiir set krna hai REASON => suppose hamare pass already kuch 'todos' bani hue padi hai too jese hee hamari applocation load hogi tab wo bani hue 'todos' ko show bhi too krna hai na islie
  // 'getItem' => iske andar ekk hee parameter aata hai i.e 'key
  // 'setItem' => iske andar 2 parameters aate hai : 'key' and 'value'
  //vvv.Imp NOTE : JAB bhi hamm local storage sai koi chij 'Get' krr rhe ho tab hame usse 'JSON' mai chnage krna pdta hai kyoki browser hame string Object return krta hai. islie hamne upper "GET" wale local storage mai JSON mai convert kiya hai fiir usse get kiya hai
  // Similarly Jab ham koi value 'Set' karwa rhe hai i.e Local Storage par store krwa rhe hai too hamne jo 'JSON' mai 'String' ko convert kiya tha usko vps 'String' mai convert krke bhejna pdega kyoki Browser only understands 'String' islie hamne upper 'Set' wale local storage mai string mai convert krke bheja hai
  

  return (
    <TodoProvider value={{todos, addTodo , updateTodo,deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
