import { createSlice } from "@reduxjs/toolkit";
import { TodoLists } from "../../Types/Types";
import { IRootState } from "../store/store";

type T = { todos: TodoLists[]} & TodoLists;

const initialState: T = {
  todos: [],
  id: "",
  todo: "",
  date:"",
  deleteMode:false,
  editMode:false,
  status:'Todo'
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
      state.id = action.payload.id;
      state.todo = action.payload.todo;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, setStatus, updateTodo } = todoSlice.actions;
export const TodoSelector = (store: IRootState) => store.TodoReducer;
