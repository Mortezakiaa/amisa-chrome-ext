import { useState } from "react";

function Modal() {
  const [laounch, setLaounch] = useState(false);
  const launchHandler = () => {
    console.log("launch");
    setLaounch(true);
  };
  const closeHandler = () => {
    setLaounch(false);
  };
  return (
    <div className={laounch ? "absolute top-0 left-0  w-full h-[109vh] flex justify-center items-center bg-slate-50" : "none"}>
      <div className="m-auto  ">
        <button onClick={launchHandler} className={laounch ? "hidden " : "bg-purple-500 "}>
          Laounch Modal
        </button>
        <div className={laounch ? " rounded-lg bg-cyan-400 w-80 h-80" : "hidden rounded-lg bg-cyan-400 w-80 h-80"}>
          <button onClick={closeHandler} className="bg-orange-400">
            X
          </button>
          <p>Modal</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
