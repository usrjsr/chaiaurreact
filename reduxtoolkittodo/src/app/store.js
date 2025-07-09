import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice'; // Import the todo reducer single source file
export const store = configureStore({// Configure the Redux store
    reducer: todoReducer// Set the todo reducer as the main reducer
})