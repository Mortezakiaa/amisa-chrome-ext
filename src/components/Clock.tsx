/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function Clock() {
  const checkTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };
  const getTime = () => {
    const now = new Date();
    const h = checkTime(now.getHours());
    const m = checkTime(now.getMinutes());
    return `${h}:${m}`;
  };
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}
