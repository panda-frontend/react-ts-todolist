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
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  },
})

// 默认导出 reducer 到 ./store/index.ts 中组合
const reducer = todoStore.reducer;
export default reducer;

// 机构并导出 action creators
export const { addTodo } = todoStore.actions;
export const { deleteTodo } = todoStore.actions;