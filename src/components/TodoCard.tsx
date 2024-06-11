import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import Like from "../icons/Like";
import DisLike from "../icons/DisLike";
import { TTodoCard } from "../Types/Types";

export default function TodoCard({
  text,
  id,
  DeleteTodo,
  editTodo,
  setToEdit,
  todo
}: TTodoCard) {
  return (
    <div className="flex justify-between p-1 group bg-white border border-slate-500 rounded-lg shadow hover:bg-gray-100">
      <div className="flex flex-col w-4/5">
        <div className="flex gap-2 items-center w-full">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <p className="whitespace-nowrap group-hover:text-wrap group-hover:whitespace-normal group-hover:overflow-visible overflow-hidden overflow-ellipsis">
            {text}
          </p>
        </div>
        {todo.editMode ? (
          <div className=" text-red-700 flex items-center gap-2">
            <span className="block sm:inline">مطمئنی میخای پاکش کنی؟</span>
            <span className="flex items-center gap-1">
              <button onClick={() => DeleteTodo(id)}>
                <Like />
              </button>
              <button
                onClick={() => {
                  setToEdit(id,false)
                }}
              >
                <DisLike />
              </button>
            </span>
          </div>
        ) : null}
      </div>
      <div className="group-hover:items-center group-hover:gap-[1px] hidden group-hover:flex transition-all duration-1000">
        <button
          onClick={() => {
            editTodo(id);
          }}
        >
          <Edit />
        </button>
        <button
          onClick={() => {
            setToEdit(id,true)
          }}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}
