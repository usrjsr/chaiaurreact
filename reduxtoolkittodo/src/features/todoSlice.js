import { createSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {// Initial state of the todo slice
    todos: [{id: 1, text: "Hello World"}]// Initial state with a sample todo
}//can be empty object or array

export const todoSlice = createSlice({
    name: "todo",// Name of the slice
    initialState,// Initial state of the slice
    reducers: {//key value pairs of action creators
        addTodo: (state,action)=> {//inside state is the current state of the slice, action is the action dispatched inside action 
            const todo ={
                id: nanoid(), // Generate a unique ID for the todo
                text: action.payload// The text of the todo 
            }
            state.todos.push(todo);// Add the new todo to the todos array
        },// Action to add a todo
        removeTodo: (state,action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);// Remove a todo by its ID ,action.payload have the id of the todo to be removed
        },
        updateTodo: (state,action)=>{
            state.todos= state.todos.map((todo)=>{todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo});// Update a todo by its ID and new text
        }
    }
})

export const {addTodo, removeTodo, updateTodo}=todoSlice.actions;// export the reducer actions to be used in components

export default todoSlice.reducer;// Export the reducer to be used in the store