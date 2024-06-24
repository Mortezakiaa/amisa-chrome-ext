/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { TodoLists } from "../Types/Types";
import { GuidGenerator } from "../utils/utils";
import {
  addTodo,
  removeTodo,
  setStatus,
  setToEditMode,
  TodoSelector,
  updateTodo,
} from "../statemanagment/slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import { globalStateSelector } from "../statemanagment/slices/globalState";
import { importCalendar, importCalendarLocale } from "../utils/Calendar";

export default function useTodo() {
  const [todo, setTodo] = useState<TodoLists>({
    id: GuidGenerator(),
    status: "Todo",
    todo: "",
    date: "",
    deleteMode: false,
  });
  const [todoReminder, setTodoReminder] = useState({
    isOpen: false,
    title: "",
    id: "",
  });
  const dispatch = useDispatch();
  const { todos } = useSelector(TodoSelector);
  const {
    DatePicker: { calendar, locale },
  } = useSelector(globalStateSelector);
  const cl = importCalendar(calendar.name);
  const lo = importCalendarLocale(locale.name);

  useEffect(() => {
    const timeout = todos?.map((i) => {
      const today = new DateObject({ calendar: cl, locale: lo }).format();
      if (i.date === today && i.status === "Todo") {
        return setTimeout(() => {
          setTodoReminder({ isOpen: true, id: i.id, title: i.todo });
        }, 0);
      }
    });

    return () => {
      timeout.forEach((i) => clearTimeout(i));
    };
  }, [todos]);

  const handleAddTask = () => {
    if (todo.todo == "") {
      toast.error("مقدار تسک نمی تواند خالی باشد");
      return;
    }
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
    todoReminder,
    setTodoReminder,
  };
}
