
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectItem } from "../../redux/selectionSlice";
import ModalStructure from "./ModalStructure";


const TimeModal = ({ close, step, setStep }) => {

  const selectedItem = useSelector((state)=>state.selections)
  const dispatch = useDispatch();

  const handleNext = () => {
    console.log("Next clicked");
    setStep(step + 1);
  };

  const handleBack = () => {
    console.log("Back clicked");
    setStep(step - 1);
  };

   // Generate dates and their respective times
   const getNextSevenDays = () => {
    const days = [];
    const times = ["3:00 AM", "11:00 AM", "5:00 PM", "9:00 PM"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const day = dayNames[date.getDay()];
      const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

      days.push({
        day,
        date: formattedDate,
        times,
      });
    }

    return days;
  };

  const handleClick = (date,time) => {
    dispatch(selectItem({...selectedItem, time: time, date: date }));
    console.log("Clicked Me!", text);
  };

  const scheduleData = getNextSevenDays();

  const renderItem = (item, index) => (
    <div key={index} className="border-b border-gray-600 pb-4 mb-4  ">
      <p className="font-medium mt-4 mx-8" >{item.day}, {item.date}</p>
      <div className=" text-center mt-6 mx-8">
        {item.times.map((time, idx) => (
          <p
            key={idx}
            className=" cursor-pointer border border-purple my-4 px-4 py-2 rounded hover:bg-purple hover:text-white transition"
            onClick={()=>handleClick(item.date, time)}
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
