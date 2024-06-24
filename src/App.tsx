import { useDispatch, useSelector } from "react-redux";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import {
  globalStateSelector,
  setBgColor,
} from "./statemanagment/slices/globalState";
import Main from "./components/Main";
import { useEffect } from "react";
import ModalProviders from "./components/ModalProviders";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cx = JSON.parse(JSON.stringify(localStorage.getItem("bgColor")));
    dispatch(setBgColor(cx));
  }, [dispatch]);

  const { color } = useSelector(globalStateSelector);
  return (
    <>
      <div className={`py-4 w-full px-10 bg-[${color}]`}>
        <Header />
        <Main />
      </div>
        <Drawer />
      <ModalProviders />
    </>
  );
}

export default App;
