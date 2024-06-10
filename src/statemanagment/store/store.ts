import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "../slices/DrawerSlice";
import BgColorReducer from "../slices/AppBg";
import TodoReducer from "../slices/TodoSlice";

const store = configureStore({
  reducer: { DrawerReducer, BgColorReducer, TodoReducer },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
