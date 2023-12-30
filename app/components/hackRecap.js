const HackRecap = () => {
  return (
    <div className="w-[92vw] bg-[#4A88FF] h-[24vh] rounded-lg flex flex-col items-center justify-center">
      <h1 className="text-[2vw] text-white font-bold mt-[2vh]">
        2023 Hack Recap
      </h1>
      <div className="flex flex-row mt-[2vh] w-[60%] justify-between">
        <div className="flex flex-col">
          <p className="text-white text-[1.2vw] -mb-[1.5vw]">Participants</p>
          <h2 className="recapBig font-extrabold text-[5vw]">200+</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[1.2vw] -mb-[1.5vw]">Prizes</p>
          <h2 className="recapBig font-extrabold text-[5vw]">1000+</h2>
        </div>
        <div className="flex flex-col">
          <p className="text-white text-[1.2vw] -mb-[1.5vw]">Workshops</p>
          <h2 className="recapBig font-extrabold text-[5vw]">5+</h2>
        </div>
      </div>
    </div>
  );
};

export default HackRecap;
