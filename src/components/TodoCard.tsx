import Delete from "../icons/Delete";
import Edit from "../icons/Edit";

type T = {
  text: string;
};

export default function TodoCard({ text }: T) {
  return (
    <div className="flex justify-between p-1 group bg-white border border-slate-500 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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
      <div className="items-center gap-[1px] hidden group-hover:flex transition-all duration-1000">
        <button>
          <Edit />
        </button>
        <button>
          <Delete />
        </button>
      </div>
    </div>
  );
}
