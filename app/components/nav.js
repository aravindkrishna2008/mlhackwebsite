import Link from "next/link";

const Navbar = ({ handleClick, handleClick2, handleClick3 }) => {
  return (
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
  );
};

export default Navbar;
