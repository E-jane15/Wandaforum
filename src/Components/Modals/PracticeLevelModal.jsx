
import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectItem } from '../../redux/selectionSlice';
import ModalStructure from './ModalStructure';
import ModalItem3 from '../ModalItem3';

const PracticeLevelModal = ({setStep, step, close}) => {

    const modalItems = [
        { heading:'Beginner', 
          text: 'I am new to mock interviews.' },

        { heading:'Intermediate', 
          text: 'I have done several mock interviews already.' },

        { heading:'Advanced', 
          text: 'I am a master at mock interviews.' },
        
      ];

      const dispatch = useDispatch();
     const selectedItem = useSelector((state) => state.selections);

      const handleNext = () => {
        setStep(step + 1);
      };
    
      const handleBack = () => {
        setStep(step - 1);
      };

      const handleClick = (heading) => {
        dispatch(selectItem({...selectedItem, practice: heading }));
      };
    
  return (
    <ModalStructure
    title="Select your practice level "
    items={modalItems}
    onClose={close}
    onNext={handleNext}
    onBack={handleBack}
    renderItem={(item, index) => (
   <ModalItem3 key={index}  heading={item.heading} text={item.text} onClick={handleClick} />
    )}
  />
  )
}

export default PracticeLevelModal