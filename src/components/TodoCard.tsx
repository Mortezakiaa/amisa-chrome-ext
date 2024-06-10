import { useDispatch } from "react-redux";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import { removeTodo } from "../statemanagment/slices/TodoSlice";
import DeleteAlert from "./DeleteAlert";

type T = {
  text: string;
  id: string;
};

export default function TodoCard({ text, id }: T) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-1 group bg-white border border-slate-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <p className="whitespace-nowrap overflow-hidden overflow-ellipsis group-hover:text-wrap">
            {text}
          </p>
        </div>
        <div>
          <DeleteAlert />
        </div>
      </div>
      <div className="items-center gap-[1px] hidden group-hover:flex transition-all duration-1000">
        <button onClick={() => {}}>
          <Edit />
        </button>
        <button
          onClick={() => {
            dispatch(removeTodo(id));
          }}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
}
