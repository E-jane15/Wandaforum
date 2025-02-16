import React from 'react'
import { useSelector } from 'react-redux';
import ModalStructure from './ModalStructure'
import ModalItem2 from '../ModalItem2';
import { BiMicrophone, BiTime } from 'react-icons/bi';
import { PiCheck } from 'react-icons/pi';

const FinalModal = ({close, setStep,interviewData}) => {
  const { date, time, interviewType } = interviewData || {}; // Extract data
  const selections = useSelector((state) => state.selections); // Fetch the Redux state
  console.log(selections);
 
  
  const modalItems = [
        { icon: <BiTime className='size-7'/>,
          text:`Your ${interviewType} is scheduled for ${date} at ${time}.Add to your calendar so you don’t forget. `, 
          heading: '' },

        { icon: <BiMicrophone className='size-7'/>,
          heading:'', 
          text: 'Make sure you have a working camera and microphone.' },
      ];
      const handleNext = () => {
        setStep(1)
        close()
      };
  
  return (
    <ModalStructure
      title="Your interview is confirmed!"
      showBackButton={false}
      showCloseIcon={false}
      image = <PiCheck className='size-12 m-auto mt-6 -mb-5 bg-purple rounded-full px-3 py-3'/>
      items={modalItems}
      onClose={close}
      onNext={handleNext}
      nextButtonText="Done"
      renderItem={(item, index) => (
     <ModalItem2 key={index} icon={item.icon} heading={item.heading} text={item.text} />
      )}
    />
  )
}

export default FinalModal