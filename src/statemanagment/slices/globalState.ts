import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const initialState = {
  color: "#fff",
  DatePicker: { locale: persian, calendar: persian_fa },
  isDrawerOpen: false,
};

const globalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.color = action.payload;
      setToLocalStorage(action.payload);
    },
    setDateTimeFormat: (state, action) => {
      state.DatePicker.locale = action.payload.locale;
      state.DatePicker.calendar = action.payload.calendar;
    },
    setOpen: (state, action) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

const setToLocalStorage = (color: string) => {
  localStorage.setItem("bgColor", color);
};

export default globalState.reducer;
export const { setBgColor, setDateTimeFormat, setOpen } = globalState.actions;
export const globalStateSelector = (store: IRootState) => store.globalReducer;
