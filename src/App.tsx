import { useDispatch, useSelector } from "react-redux";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import { globalStateSelector, setBgColor } from "./statemanagment/slices/globalState";
import Main from "./components/Main";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import EventModal from "./components/EventModal";
import ReminderEventModal from "./components/ReminderEventModal";
import ModalText from "./components/ModalText";
import axios from "axios";

const url = `https://www.googleapis.com/customsearch/v1?q=dsa&key=&cx=93e9d2f7de1c6419a`;
// const params = {
//   client: "partner-web",
//   hl: "en",
//   sugexp: "csems,nrl=10",
//   q: "dsa",
//   callback: "google.sbox.p50",
// };


axios.get(url).then((res)=>{
    console.log(res.data);
}).catch(er=>{
    console.log(er);
})

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
        <ModalText />
      </div>
      <Drawer />
      <EventModal />
      <Toaster />
      <ReminderEventModal />
    </>
  );
}

export default App;
