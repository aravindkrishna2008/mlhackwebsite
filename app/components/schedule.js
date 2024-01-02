import ScheduleItem from "./scheduleItem";

const Schedule = () => {
  return (
    <div className="flex flex-col justify-center align-middle items-center pt-[10vh] pb-[10vh] bg-[#4A88FF] w-[100vw] text-white">
      <h1 className="text-[3vw] font-bold text-white">Schedule</h1>
      <div className="flex flex-row justify-evenly w-[80%] mt-[2vh]">
        <div className="flex flex-col items-center w-[20vw] gap-3">
          <h2 className="text-[1.5vw] text-white font-bold mb-2">
            Day 1 - Jan 8th
          </h2>
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
        </div>
        <div className="flex flex-col items-center w-[20vw] gap-3">
          <h2 className="text-[1.5vw] text-white font-bold mb-2">
            Day 2 - Jan 9th
          </h2>
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
        </div>
        <div className="flex flex-col items-center w-[20vw] gap-3">
          <h2 className="text-[1.5vw] text-white font-bold mb-2">
            Day 3- Jan 10th
          </h2>
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
          <ScheduleItem
            name="Opening Ceremony"
            time="10:00 AM - 10:30 AM"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam."
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
