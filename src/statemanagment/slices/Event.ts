import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TEvent } from "../../Types/Types";
import { GuidGenerator } from "../../utils/utils";

type T = {
  items: TEvent[];
  item: TEvent;
  isOpenModal: boolean;
  editOrDeleteMode: boolean;
};

const initialState: T = {
  items: [
    {
      date: "۱۴۰۳/۰۴/۰۴",
      eventTitle: "first simple task",
      id: "1",
      reminderTime: "0",
      time: "10:27",
    },
    {
      date: "۱۴۰۳/۰۳/۳۱",
      eventTitle: "helloworld2",
      id: "2",
      reminderTime: "0",
      time: "10:30",
    },
  ],
  item: {
    date: "",
    eventTitle: "",
    id: "",
    reminderTime: "0",
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
    updateEvent: (state) => {
      state.items = state.items.map((i) => {
        if (i.id === state.item.id) {
          i = Object.assign({}, state.item);
        }
        return i;
      });
    },
    setEditMode: (state, action) => {
      state.editOrDeleteMode = action.payload;
    },
    modalHandler: (state, action) => {
      state.isOpenModal = action.payload;
    },
    setEventDateTime: (state, action) => {
      state.item.date = action.payload.date;
      state.item.time = action.payload.time;
    },
    setEdit: (state, action) => {
      const newItem = state.items.filter((i) => i.id === action.payload);
      state.item = newItem[0];
    },
    setEventTitle: (state, action) => {
      state.item.eventTitle = action.payload;
    },
    setEventDate: (state, action) => {
      state.item.date = action.payload;
    },
    setEventReminderTime: (state, action) => {
      state.item.reminderTime = action.payload;
    },
    setEventTime: (state, action) => {
      state.item.time = action.payload;
    },
    remindEventLater: (state, action) => {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.reminderTime = (Number(i.reminderTime) + 300000).toString();
        }
        return i;
      });
    },
    resetItem: (state) => {
      state.item = {
        date: "",
        eventTitle: "",
        id: GuidGenerator(),
        reminderTime: "atmoment",
        time: "",
      };
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
  setEventTitle,
  setEdit,
  setEventDate,
  setEventReminderTime,
  setEventTime,
  setEditMode,
  remindEventLater,
  resetItem,
} = eventSlice.actions;
export const EventSelector = (store: IRootState) => store.EventReducer;
