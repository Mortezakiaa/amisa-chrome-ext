import TodoCard from "./TodoCard";
import TodoListTaskbar from "./TodoListTaskbar";

export default function TodoList() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <TodoCard text="morteza kia" />
      </div>
      <div>
        <TodoListTaskbar />
      </div>
    </div>
  );
}
