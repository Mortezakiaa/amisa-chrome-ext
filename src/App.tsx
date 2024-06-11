import { useDispatch, useSelector } from "react-redux";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { BgColorSelector, setBgColor } from "./statemanagment/slices/AppBg";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const cx = JSON.parse(JSON.stringify(localStorage.getItem("bgColor")));
    dispatch(setBgColor(cx));
  }, [dispatch]);

  const { color } = useSelector(BgColorSelector);
  return (
    <>
      <div className={`py-4 w-full px-10 bg-[${color}]`}>
        <Header />
        <Main />
      </div>
      <Drawer />
    </>
  );
}

export default App;
