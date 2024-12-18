
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectItem, addInterview, resetSelections } from "../../redux/selectionSlice";
import ModalStructure from "./ModalStructure";


const TimeModal = ({ close, step, setStep }) => {

  const selectedItem = useSelector((state)=>state.selections);
  const dispatch = useDispatch();

  const handleNext = () => {
      // Schedule the interview
    dispatch(addInterview());
    dispatch(resetSelections());  //Reset selections after submit button is clicked
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

   // Generate dates and their respective times
   const getNextSevenDays = () => {
    const days = [];
    const times = ["3:00 AM", "11:00 AM", "5:00 PM", "9:00 PM"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const now = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      const isToday = i === 0;
      const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

      const availableTimes = times.filter((time) => {
        if (!isToday) return true; // Include all times for future days
        const [hours, minutes] = time.split(":").map((t) => parseInt(t.replace(/AM|PM/, ""), 10));
        const isPM = time.includes("PM") && hours !== 12; // Handle PM times
        const timeInMinutes = (hours + (isPM ? 12 : 0)) * 60 + minutes;

        return timeInMinutes > currentTime; // Include only times later than now
      });

      if (availableTimes.length > 0) {
        const day = dayNames[date.getDay()];
        const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

        days.push({
          day,
          date: formattedDate,
          times: availableTimes,
        });
      }
    }

    return days;
  };

  const handleClick = (date,time) => {
    dispatch(selectItem({...selectedItem, time: time, date: date }));
  };

  const scheduleData = getNextSevenDays();

  const renderItem = (item, index) => (
    <div key={index} className="border-b border-gray-600 pb-4 mb-4  ">
      <p className="font-medium mt-4 mx-8" >{item.day}, {item.date}</p>
      <div className=" text-center mt-6 mx-8">
        {item.times.map((time, idx) => (
          <p
            key={idx}
            className={`cursor-pointer border border-purple my-4 px-4 py-2 rounded transition 
              ${selectedItem.time === time && selectedItem.date === item.date
                ? "bg-purple text-white"
                : "hover:bg-purple hover:text-white"}`}
            onClick={() => handleClick(item.date, time)}
         >
            {time}
          </p>
        ))}
      </div>
    </div>
  );

  return (
   
    <ModalStructure
      title="Select your time to practice"
      items={scheduleData}
      timemodal={true}
      onClose={close}
      onNext={handleNext}
      onBack={handleBack}
      renderItem={renderItem}
      nextButtonText="Schedule" // Change "Next" to "Submit"
      
    />
     ); 
  
};

export default TimeModal;
