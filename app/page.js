import Image from "next/image";
import Navbar from "./components/nav";
import HomeComp from "./components/home";
import HackRecap from "./components/hackRecap";
import Prizes from "./components/prizes";

export default function Home() {
  return (
    <div className="flex flex-col items-center pb-[10vh]">
      <Navbar />
      <HomeComp />
      <Image
        src="/Vector (1).svg"
        width={1000}
        height={1000}
        className="w-[80%] -mt-[1vh] mb-[4vh]"
      />
      <HackRecap />
      <Image
        src="/Vector (2).svg"
        width={1000}
        height={1000}
        className="w-[80%] mt-[4vh]"
      />
      <Prizes />
    </div>
  );
}
