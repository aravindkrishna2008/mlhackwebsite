const Home = () => {
  return (
    <div className="h-[80vh] flex flex-row ">
      <div className="w-[50%] p-2 flex flex-col justify-center items-center pl-[4vw] pr-[1.1vw] pt-[3vh]">
        <div className="pr-5">
          <p className="text-[1.2vw] font-medium -mb-2 ml-1">
            Early <span className="future">2024</span>
          </p>
          <h1 className="text-[6vw] leading-[6.4vw] font-extrabold ">
            Hack the <span className="future">Future</span> with ML Power
          </h1>
          <p className="text-[1.2vw] w-[80%] mt-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </p>
          <div className=" flex flex-row  mt-[1.2vh] items-center gap-8">
            <div className="w-[14vw] group text-[1.1vw] h-[5vh] cursor-pointer hover:bg-[#3e81ff] hover:-translate-y-1 transition-all duration-200 bg-[#4A88FF] rounded-lg text-white flex items-center justify-center font-medium">
              Join the Fun
              <img
                className="ml-4 group-hover:translate-x-1 transition-all duration-200 h-[40%]"
                src="arrow.svg"
                alt="arrow"
              />
            </div>
            <p className="text-[1.1vw]  hover:text-black text-[#3a3a3a] font-medium transition-all duration-200 hover:-translate-y-1 cursor-pointer">
              Past Projects
            </p>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[80%]">
        <div className="w-[50%] h-[80vh] absolute gradRect" />
        <img
          className="object-cover w-[100%] h-[80vh] "
          src="/hero1.jpeg"
          alt="hero"
        />
      </div>
    </div>
  );
};
export default Home;
