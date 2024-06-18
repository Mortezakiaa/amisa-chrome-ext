import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../slices/globalState";
import TodoReducer from "../slices/TodoSlice";
import EventReducer from "../slices/Event";

const store = configureStore({
  reducer: { globalReducer, TodoReducer, EventReducer },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
