import { useDispatch, useSelector } from "react-redux";
import Setting from "../icons/Setting";
import {
  globalStateSelector,
  setOpen,
} from "../statemanagment/slices/globalState";

export default function Header() {
  const { isDrawerOpen } = useSelector(globalStateSelector);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <div>amisa.me</div>
      <div className="flex items-center">
        <button
          onClick={() => {
            dispatch(setOpen(!isDrawerOpen));
          }}
          type="button"
          className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-1 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
        >
          <Setting />
        </button>
      </div>
    </div>
  );
}
