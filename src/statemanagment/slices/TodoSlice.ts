import { createSlice } from "@reduxjs/toolkit";
import { TodoLists } from "../../Types/Types";
import { IRootState } from "../store/store";

type T = { todos: TodoLists[] };

const initialState: T = {
  todos: [
    {
      date:"۱۴۰۳/۰۴/۰۴",
      deleteMode:false,
      id:'12',
      status:"Todo",
      todo:'todooooooooooooooooooooo'
    }
  ],
};

const todoSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    setStatus: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          item.status = action.payload.status;
        }
        return item;
      });
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          item = Object.assign({}, action.payload.todo);
        }
        return item;
      });
    },
    setToEditMode: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id == action.payload.id) {
          item.deleteMode = action.payload.edit;
        }
        return item;
      });
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, setStatus, updateTodo, setToEditMode } =
  todoSlice.actions;
export const TodoSelector = (store: IRootState) => store.TodoReducer;
