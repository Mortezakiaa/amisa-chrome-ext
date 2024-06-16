import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TEvent } from "../../Types/Types";

type T = { items: TEvent[]; isOpenModal: boolean; date: string; time: string };

const initialState: T = {
  items: [],
  isOpenModal: false,
  date: "",
  time: "",
};

const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.items.push(action.payload);
    },
    removeEvent: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateEvent: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.eventTitle = action.payload.title;
        }
        return item;
      });
    },
    modalHandler: (state, action) => {
      state.isOpenModal = action.payload;
    },
    setEventDateTime: (state, action) => {
      state.date = action.payload.date;
      state.time = action.payload.time;
    },
  },
});

export default eventSlice.reducer;
export const {
  addEvent,
  removeEvent,
  updateEvent,
  modalHandler,
  setEventDateTime,
} = eventSlice.actions;
export const EventSelector = (store: IRootState) => store.EventReducer;
