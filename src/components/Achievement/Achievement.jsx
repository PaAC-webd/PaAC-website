import { useState, useEffect } from "react";
import "./Achievement.css";
import Data from "./Data.js";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
export default function Achievement() {
  const [state, setState] = useState(0);
  const len = Data.length;
  useEffect(() => {
    const carousel = setInterval(() => {
      setState((prev) => (prev + 1) % len);
    }, 5000);
    return () => {
      clearInterval(carousel);
    };
  }, [len]);
  return (
    <div className="achi-container">
      <button
        className="achi-btn"
        onClick={() => setState((state - 1 + len) % len)}
      >
        <ChevronLeftIcon></ChevronLeftIcon>
      </button>
      <p className="achi-desc">{ state == 1 ? <>
      {Data[state].desc.split(':')[0]} :
      <br />
      {Data[state].desc.split(':')[1]}
      </> : Data[state].desc}</p>
      <button className="achi-btn" onClick={() => setState((state + 1) % len)}>
        <ChevronRightIcon></ChevronRightIcon>
      </button>
    </div>
  );
}
