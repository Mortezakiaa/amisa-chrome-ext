import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";

const initialState = {};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
});

export default eventSlice.reducer;
export const {} = eventSlice.actions;
export const EventSelector = (store: IRootState) => store.EventReducer;
