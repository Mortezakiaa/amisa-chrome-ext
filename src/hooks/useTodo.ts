import { useState } from "react";
import { TodoLists } from "../Types/Types";
import { GuidGenerator } from "../utils/GuidGenerator";
import {
  addTodo,
  removeTodo,
  setStatus,
  setToEditMode,
  TodoSelector,
  updateTodo,
} from "../statemanagment/slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";

export default function useTodo() {
  const [todo, setTodo] = useState<TodoLists>({
    id: GuidGenerator(),
    status: "Todo",
    todo: "",
    date: "",
    editMode: false,
  });
  const dispatch = useDispatch();
  const { todos } = useSelector(TodoSelector);

  const handleAddTask = () => {
    const isTodoExist = todos.some((i) => i.id === todo.id);
    if (isTodoExist) {
      dispatch(updateTodo({ id: todo.id, todo: todo }));
      setTodo({ ...todo, date: "", todo: "", id: GuidGenerator() });
    } else {
      dispatch(addTodo(todo));
      setTodo({ ...todo, date: "", todo: "", id: GuidGenerator() });
    }
  };

  const DeleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id: string) => {
    const todoEdit = todos.find((todo) => todo.id === id) as TodoLists;
    setTodo(todoEdit);
  };

  const setToEdit = (id: string, edit: boolean) => {
    dispatch(setToEditMode({ id, edit }));
  };

  const handleStatus = (id: string, check: boolean) => {
    dispatch(setStatus({ id, status: check ? "Done" : "Todo" }));
  };

  return {
    handleAddTask,
    todo,
    setTodo,
    DeleteTodo,
    todos,
    handleEdit,
    setToEdit,
    handleStatus,
  };
}
