import { createSlice } from "@reduxjs/toolkit";
import { Todos } from "../../componenets/types";

const defaultTodos: Todos = [
  {
    id: 1,
    title: "Learn React",
    completed: true
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: true
  },
  {
    id: 3,
    title: "Learn Redux Toolkit",
    completed: false
  }
]

const todoStore = createSlice({
  name: "todolist",
  initialState: {
    todos: defaultTodos
  },
  reducers: {}
})

const reducer = todoStore.reducer;
export default reducer;
