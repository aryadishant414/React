import {configureStore} from '@reduxjs/toolkit'  // iss line sai store bann gaya hai but properly tyaar/ready nhi hai
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
