import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    todos: [  // ye 'todos' (ekk Property hai) is like a variable jo hamne pichle 2 projects mai banaya tha just wese hee. HAme abb ye samaj aa gaya haia ki iss variable ke andar value kuch bhi ho skti hai. like array ho skti hai ya fiir array ke andar string ho skti hai ya fiir array ke andar object ho skti hai like in this case , yaa fir sirf object ho skti hai  ya fiir sirf string ho skti hai (jese last project mai thi) SO THIS ISS FIELD KE ANADAR VALUE KUCH BHI HO SKTI HAI
        {
            id: 1,
            todo: " Todo msg ",
            completed: false,
        }
    ],
    addTodo: (todo) => {},  // ye method hai just like our privious wala project
    updateTodo: (id , todo) => {}, // ye method hai just like our privious wala project
    deleteTodo: (id) => {}, //ye method hai just like our privious wala project
    toggleComplete: (id) => {} //ye method hai just like our privious wala project

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider