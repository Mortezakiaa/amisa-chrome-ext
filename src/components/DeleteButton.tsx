type T = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onclick: (e?: any) => void;
};

export default function DeleteButton({ onclick }: T) {
  return (
    <button
      onClick={onclick}
      type="button"
      className="border border-red-500 text-red-500 font-bold py-2 px-4 rounded"
    >
      حذف کردن
    </button>
  );
}
