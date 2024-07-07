import { createSlice , nanoid} from "@reduxjs/toolkit";
// nanoid => Generate Unique id's

// Ye initialState ke andar jo pada hai wo hamata ekk 'todo' hai
const initialState = {
    todos: [{id: 1, text: "Hello worldx"}]
}

// STEP 1 : Now create a Slice
export const todoSlice = createSlice({
    name: 'todo',
    initialState,  // ye upper define krr diya hai hamm chahe too yaha bhi define krr skte hai
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo) // ye line LIKHNA BHUL GAYA THA MAI and 'nanoid' mai parenthesis lagana bhul gaya tha  
        },  
         removeTodo: (state, action) => {
            state.todos = state.todos.filter((eachTodo) => eachTodo.id !== action.payload)
         }, 
    }
})

// STEP 2 :  AFTER CREATING THE SLICE HAME EXPORT '2 PARTS' MAI KRWANA PDTA HAI. WHY? => COZ 'Syntax' hai too iska too kuch krr nhi skte  

// Export Part 1 : Export each Individual 'reducer'
export const {addTodo , removeTodo} = todoSlice.actions

// Export Part 2 : hamne jo 'Store' banaya tha jisme hame data rkhna hai wo FILHAAL AKELA GHUM RHA HAI. SO  usse abhi tak kuch pata nhi chlaa hai ki muje konsa data apne andar rkhna hai TOO USSE BHI TOO HAME BATANA PDEGA KI TUM APNE ANDAR YE RKHO. KYOKI JABTAK HAMM ISKO BATAENGE NHI TAB TAK YE STORE MAINTAIN NHI KRR PAAEGA. NOTE : Hamara ye Store 'Restrictive' Store hota hai MEANS ye kehta hai ki mai harr kisi sai leke value update nhi krta hu mere anadar AAP jo jo 'reducer' REGISTER kroge mai bss unse hee value leke update krta hu. TOO HAME ISKO POORA KA POORA WHOLE REDUCER DENA PADEGA JISME HARR EKK INDIVIDUAL REDUCER PADA HAI
export default todoSlice.reducer












// NOTES : 'createSlice' method => apne parameters mai almost 'objects' hee leta hai.

// * 'name' => syntax hai ye likhna hee pdega iske andar uski value kuch bhi ho skti hai ex : 'todo' , 'chai' , 'dishant' , etc.

// * 'reducers' => ke andar 'Properties' and 'Functions' aayenge.
    // 'addTodo' ekk Property hai and iske andar 'function' aayega.
    // 'removeTodo' ekk Property hai and iske andar 'function' aayega.
    //Imp NOTE : Reducer ke andar jo bhi 'property' hai iske function ke parameters mai HAMESHA hame 2 chije milengi. i.e => 'state' and 'action.

    // * 'state' => ye state ekk variable hai which gives us the access of the 'current'(abhi ki) state. MTLB ki abhi 'initial-state'(i.e hamari present state) ke andar kya pada hai wo sab. EXAMPLE pehle ke kuch 'todos' hamne bana rkhe hai too wo saare todos iske anadr abhi store pade honge

    // * 'action' => CURRENT JO BHI DATA PASS HO RHA HAI WO MILTA HAI ACTION KE ANDAR.
    // MTLB 'action' kuch values deta hai ye jiski hame need hoti hai. FOR EXAMPLE hame todo ko delete krna hai par kisko krna hai iski information bhi too chhaiye na. too ye information hame 'action' deta hai. suppose uski 'id' wagara