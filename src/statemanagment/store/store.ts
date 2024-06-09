import { configureStore } from "@reduxjs/toolkit";
import DrawerReducer from "../slices/DrawerSlice";

const store = configureStore({
  reducer: { DrawerReducer },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
