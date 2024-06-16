import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "../slices/DrawerSlice";
import BgColorReducer from "../slices/AppBg";
import TodoReducer from "../slices/TodoSlice";
import EventReducer from "../slices/Event";

const store = configureStore({
  reducer: { DrawerReducer, BgColorReducer, TodoReducer, EventReducer },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
