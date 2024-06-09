import { useSelector } from "react-redux";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { BgColorSelector } from "./statemanagment/slices/AppBg";

function App() {
  const { color } = useSelector(BgColorSelector);
  return (
    <div className={`px-[50px] py-4 bg-[${color}]`}>
      <Header />
      <Drawer />
    </div>
  );
}

export default App;
