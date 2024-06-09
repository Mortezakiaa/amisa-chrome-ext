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
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Drawer Content</h2>
          <p>This is the content of the drawer.</p>
        </div>
      </div>
    </div>
  );
}
