export default function TodoListTaskbar() {
  return (
    <div className="flex items-center justify-center shadow-lg max-w-lg border border-t p-2">
      <div className="flex flex-wrap">
        <h2 className=" text-gray-800 text-lg">اضافه کردن تسک جدید</h2>
        <div className="w-full md:w-full">
          <textarea
            // onKeyDown={}
            className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
            placeholder="نوشتن تسک جدید"
          />
        </div>
        <div className="w-full md:w-full flex items-start">
          <button className="bg-white text-sm hover:bg-gray-100 text-gray-800 font-semibold p-1 border border-gray-400 rounded shadow">
            اضافه کردن
          </button>
        </div>
      </div>
    </div>
  );
}
