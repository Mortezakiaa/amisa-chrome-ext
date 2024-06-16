import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TEvent } from "../../Types/Types";

type T = { items: TEvent[] };

const initialState: T = {
  items: [],
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
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.showModal = action.payload.showModal;
        }
        return item;
      });
    },
  },
});

export default eventSlice.reducer;
export const { addEvent, removeEvent, updateEvent, modalHandler } =
  eventSlice.actions;
export const EventSelector = (store: IRootState) => store.EventReducer;
