import { useDispatch, useSelector } from "react-redux";
import { DrawerSelector, setOpen } from "../statemanagment/slices/DrawerSlice";

export default function Drawer() {
  const { isOpen } = useSelector(DrawerSelector);
  const dispatch = useDispatch();
  const toggleDrawer = () => {
    dispatch(setOpen(!isOpen));
  };
  return (
    <div className="flex">
      <div
        className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl mb-1">بک گراند</h2>
          <p className="text-gray-300">پس زمینه مد نظر خودتو بزار</p>
          <div className="flex items-center flex-wrap gap-1 mt-1">
            <button className="rounded-full bg-[#94a3b8] p-3"></button>
            <button className="rounded-full bg-[#f87171] p-3"></button>
            <button className="rounded-full bg-[#a3e635] p-3"></button>
            <button className="rounded-full bg-[#38bdf8] p-3"></button>
            <button className="rounded-full bg-[#a78bfa] p-3"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
