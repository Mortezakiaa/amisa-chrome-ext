import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  globalStateSelector,
  setBgColor,
  setOpen,
} from "../statemanagment/slices/globalState";
import Close from "../icons/Close";

export default function Drawer() {
  const { isDrawerOpen } = useSelector(globalStateSelector);
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <>
      <div
        className={`fixed top-0 right-0 left-0 bottom-0 w-screen h-full bg-black z-[1000] bg-opacity-50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => {
          dispatch(setOpen(!isDrawerOpen));
        }}
      ></div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-[1000] shadow transition-transform duration-300 ${
          isDrawerOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <div className="p-4 flex flex-col">
          <button
            className="self-end"
            onClick={() => {
              dispatch(setOpen(!isDrawerOpen));
            }}
          >
            <Close />
          </button>
          <h2 className="text-xl mb-1">بک گراند</h2>
          <p className="text-gray-300">پس زمینه مد نظر خودتو بزار</p>
          <div className="flex items-center flex-wrap gap-1 mt-1">
            <button
              className="rounded-full bg-[#fca5a5] p-3"
              onClick={() => {
                dispatch(setBgColor("#fca5a5"));
              }}
            ></button>
            <button
              className="rounded-full bg-[#a3e635] p-3"
              onClick={() => {
                dispatch(setBgColor("#a3e635"));
              }}
            ></button>
            <button
              className="rounded-full bg-[#7dd3fc] p-3"
              onClick={() => {
                dispatch(setBgColor("#7dd3fc"));
              }}
            ></button>
            <button
              className="rounded-full bg-[#c4b5fd] p-3"
              onClick={() => {
                dispatch(setBgColor("#c4b5fd"));
              }}
            ></button>
            <button
              className="rounded-full border bg-[#fff] p-3"
              onClick={() => {
                dispatch(setBgColor("#fff"));
              }}
            ></button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")!
  );
}
