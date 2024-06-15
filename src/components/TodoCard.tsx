import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import Like from "../icons/Like";
import DisLike from "../icons/DisLike";
import { TTodoCard } from "../Types/Types";
import Calendar from "../icons/Calendar";

export default function TodoCard({ text, id, DeleteTodo, editTodo, setToEdit, changeStatus, todo }: TTodoCard) {
  return (
    <div className="flex flex-wrap justify-between p-1 group bg-white border border-slate-500 rounded-lg shadow hover:bg-gray-100">
      <div className="flex flex-col w-4/5">
        <div className="flex gap-2 w-full">
          <input
            onChange={(e) => changeStatus(id, e.target.checked)}
            type="checkbox"
            checked={todo.status === "Done"}
            className="w-4 h-4 mt-[0.5px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <div className={text.match(" ") ? "truncate group-hover:text-wrap" : "truncate whitespace-break-spaces group-hover:break-all"}>{text}</div>
        </div>
        <div className="text-sm flex items-center gap-1">
          {todo.date && <Calendar />}
          <span className="mt-[1px]">{todo.date}</span>
        </div>
      </div>
      <div className="group-hover:items-center group-hover:gap-[1px] hidden group-hover:flex transition-all duration-1000">
        <button
          onClick={() => {
            editTodo(id);
          }}>
          <Edit />
        </button>
        <button
          onClick={() => {
            setToEdit(id, true);
          }}>
          <Delete />
        </button>
      </div>
      {todo.deleteMode ? (
        <div className=" text-red-700 flex items-center gap-2">
          <span className="block sm:inline">مطمئنی میخای پاکش کنی؟</span>
          <span className="flex items-center gap-1">
            <button onClick={() => DeleteTodo(id)}>
              <Like />
            </button>
            <button
              onClick={() => {
                setToEdit(id, false);
              }}>
              <DisLike />
            </button>
          </span>
        </div>
      ) : null}
    </div>
  );
}
