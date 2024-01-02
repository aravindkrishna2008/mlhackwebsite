"use client";
import Image from "next/image";
import Navbar from "./components/nav";
import HomeComp from "./components/home";
import HackRecap from "./components/hackRecap";
import Prizes from "./components/prizes";
import Schedule from "./components/schedule";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="nav h-[7vh] w-[100%] flex flex-row justify-between items-center p-2 px-[4vw]">
        <h1 className="text-[1.5vw] font-bold">MLHacks</h1>
        <ul className="flex flex-row gap-5">
          <li
            onClick={() => handleClick()}
            className="text-[1vw] hover:font-medium transition-all duration-200 hover:-translate-y-[1px]"
          >
            <a href="/">Schedule</a>
          </li>
          <li
            onClick={() => handleClick2()}
            className="text-[1vw] hover:font-medium transition-all duration-200 hover:-translate-y-[1px]"
          >
            <a href="/">Home</a>
          </li>
          <li
            onClick={() => handleClick3()}
            className="text-[1vw] hover:font-medium transition-all duration-200 hover:-translate-y-[1px]"
          >
            <a href="/">Prizes</a>
          </li>
        </ul>
        <div className="w-[8vw] text-[1vw] h-[80%] cursor-pointer hover:bg-[#3e81ff] hover:-translate-y-1 transition-all duration-200 bg-[#4A88FF] rounded-lg text-white flex items-center justify-center font-medium">
          Register
        </div>
      </div>
      <div ref={ref}></div>
      <HomeComp />
      <Image
        src="/Vector (1).svg"
        width={1000}
        height={1000}
        className="w-[60%] -mt-[1vh] mb-[4vh]"
      />
      <HackRecap />
      <Image
        src="/Vector (2).svg"
        width={1000}
        height={1000}
        className="w-[60%] mt-[4vh]"
      />
      <div ref={ref2}></div>
      <Prizes />
      <Image
        src="/Vector (1).svg"
        width={1000}
        height={1000}
        className="w-[60%] mt-[4vh]"
      />

      <Schedule />
      <div ref={ref3}></div>
    </div>
  );
}
