import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todoSlice'

function Todos() {
    const [update, setUpdate] =useState(false); // State to manage if a todo is being edited
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <ul className="list-none flex flex-col items-center justify-center mt-10 ">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded shadow-md w-full shadow-white/10 hover:shadow-lg hover:shadow-black/20 transition-all duration-300"
            key={todo.id}// Unique key for each todo item otherwise it will throw a warning in the console as trying to overwrite the same key
          >
            <div className='text-white '>{todo.text}</div>
            <div className='flex items-center gap-3 ml-auto'>
             <button
                onClick={() => dispatch(updateTodo(todo.id))} // Dispatch the removeTodo action with the todo id
                className="bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                title="Update Todo"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487a2.1 2.1 0 113.02 2.923L10.335 16.958a4.5 4.5 0 01-1.897 1.13l-2.682.805.805-2.682a4.5 4.5 0 011.13-1.897l9.548-9.548z"
                    />
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5V19.5A2.25 2.25 0 0117.25 21.75H4.5A2.25 2.25 0 012.25 19.5V6.75A2.25 2.25 0 014.5 4.5H10.5"
                    />
                </svg>
                </button>


            <button
             onClick={() => dispatch(removeTodo(todo.id))}// Dispatch the removeTodo action with the todo id
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" title='Delete Todo'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
             </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos