import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TEvent } from "../../Types/Types";

type T = {
  items: TEvent[];
  item: TEvent;
  isOpenModal: boolean;
  editOrDeleteMode: boolean;
};

const initialState: T = {
  items: [],
  item: {
    date: "",
    eventTitle: "",
    id: "",
    reminderTime: "",
    time: "",
  },
  isOpenModal: false,
  editOrDeleteMode: false,
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
      state.item.date = action.payload.date;
      state.item.time = action.payload.time;
    },
    editHandler: (state, action) => {
      state.item = action.payload;
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
  editHandler,
} = eventSlice.actions;
export const EventSelector = (store: IRootState) => store.EventReducer;
