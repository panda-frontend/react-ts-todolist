import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./modules/todoStore";

const store = configureStore({
  reducer: {
    todolist: todoReducer,
  }
})


export default store;