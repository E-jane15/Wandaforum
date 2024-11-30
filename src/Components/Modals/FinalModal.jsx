import React from 'react'
import ModalStructure from './ModalStructure'
import ModalItem2 from '../ModalItem2';
import { BiMicrophone, BiTime } from 'react-icons/bi';
import { PiCheck } from 'react-icons/pi';

const FinalModal = ({close, step, setStep,}) => {
    const modalItems = [
        { icon: <BiTime className='size-7'/>,
          text:'Your AWS interview is Tuesday, November 12 at 11:00 AM.Add to your calendar so you don’t forget. ', 
          heading: '' },

        { icon: <BiMicrophone className='size-7'/>,
          heading:'', 
          text: 'Make sure you have a working camera and microphone.' },
      ];
      const handleNext = () => {
        console.log("Next clicked");
        setStep(1)
        close()
      };
    
      const handleBack = () => {
        console.log("Back clicked");
        setStep(step - 1);
      };

      
  return (
    <ModalStructure
      title="Your interview is confirmed!"
      showBackButton={false}
      showNextButton={false}
      image = <PiCheck className='size-12 m-auto mt-6 -mb-5 bg-purple rounded-full px-3 py-3'/>
      items={modalItems}
      onClose={close}
      onNext={handleNext}
      onBack={handleBack}
      renderItem={(item, index) => (
     <ModalItem2 key={index} icon={item.icon} heading={item.heading} text={item.text} />
      )}
    />
  )
}

export default FinalModal