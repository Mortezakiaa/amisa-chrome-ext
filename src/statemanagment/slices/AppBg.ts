import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";

const initialState = {
  color: "#fff",
};

const BgColorSlice = createSlice({
  name: "BgColor",
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export default BgColorSlice.reducer;
export const { setBgColor } = BgColorSlice.actions;
export const BgColorSelector = (store: IRootState) => store.BgColorReducer;
