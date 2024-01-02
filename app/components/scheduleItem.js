const ScheduleItem = ({ name, time, description }) => {
  return (
    <div className="bg-[#ffffff1f] p-8 rounded-lg">
      <h1 className="text-[1.5vw] font-bold text-white">{name}</h1>
      <p className="text-[1vw] text-white">{time}</p>
      <p className="text-[0.8vw] text-[#ffffff9d]">{description}</p>
    </div>
  );
};

export default ScheduleItem;
