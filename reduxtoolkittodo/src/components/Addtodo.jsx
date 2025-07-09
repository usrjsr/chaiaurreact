import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todoSlice";


function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const updateTodoHandler = (e) => {
    e.preventDefault(); 
    dispatch(updateTodo({ id: e.target.id, text: input }));
    setInput("");
    setIsEditing(false);
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5"
    >
      <input
        type="text"
        className="w-full sm:w-96 bg-gradient-to-r from-gray-800 to-gray-900 text-white placeholder-gray-400 rounded-xl border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-400 px-5 py-3 text-lg transition-all duration-300 shadow-lg backdrop-blur-md"
        placeholder="🚀 Add something epic..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-200 text-white text-lg font-semibold py-3 px-8 rounded-xl shadow-xl ring-1 ring-indigo-500 hover:shadow-indigo-500/30"
      >
        {isEditing ? "Edit Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
