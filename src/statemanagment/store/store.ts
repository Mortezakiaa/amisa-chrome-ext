import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "../slices/DrawerSlice";
import BgColorReducer from "../slices/AppBg";

const store = configureStore({
  reducer: { DrawerReducer, BgColorReducer },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
