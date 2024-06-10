import { createSlice } from "@reduxjs/toolkit";
import { TodoLists } from "../../Types/Types";
import { IRootState } from "../store/store";

type T = { items: TodoLists[] };

const initialState: T = {
  items: [],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    setStatus: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id == action.payload.id) {
          item.status = action.payload.status;
        }
        return item;
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, setStatus } = todoSlice.actions;
export const DrawerSelector = (store: IRootState) => store.TodoReducer;
