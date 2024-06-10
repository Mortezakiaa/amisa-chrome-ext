import DisLike from "../icons/DisLike";
import Like from "../icons/Like";

export default function DeleteAlert() {
  return (
    <div className=" text-red-700 flex items-center gap-2" role="alert">
      <span className="block sm:inline">مطمئنی میخای پاکش کنی؟</span>
      <span className="flex items-center gap-1">
        <button>
          <Like />
        </button>
        <button>
          <DisLike />
        </button>
      </span>
    </div>
  );
}
