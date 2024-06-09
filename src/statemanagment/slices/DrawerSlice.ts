import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";

const initialState = {
  isOpen: true,
};

const DrawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default DrawerSlice.reducer;
export const { setOpen } = DrawerSlice.actions;
export const DrawerSelector = (store: IRootState) => store.DrawerReducer;
