import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./modules/todoStore";

const store = configureStore({
  reducer: {
    todolist: todoReducer,
  }
})


export default store;

// https://stackoverflow.com/a/60223837
export type IRootState = ReturnType<typeof store.getState>