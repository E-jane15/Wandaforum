import React from "react";
import ModalStructure from "../../Components/Modals/ModalStructure";
import ModalItem2 from "../../Components/ModalItem2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectItem } from "../../redux/selectionSlice";
import { PiUserPlusBold, PiUsersThreeBold } from "react-icons/pi";

const PeerTypeModal = ({ close, step, setStep }) => {
  const modalItems = [
    {
      icon: <PiUsersThreeBold className="size-8" />,
      heading: "Practice with peers",
      text: "Mock interviews with other  WandaForum users where you take turns asking questions.",
    },

    {
      icon: <PiUserPlusBold className="size-7" />,
      heading: "Practice with a friend",
      text: "Invite a friend and practice on your own schedule at any time.",
    },
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
    dispatch(selectItem({...selectedItem, peer: heading }));
  };

  return (
    <ModalStructure
      title="Select your peer type"
      items={modalItems}
      onClose={close}
      onNext={handleNext}
      onBack={handleBack}
      renderItem={(item, index) => (
        <ModalItem2
          key={index}
          icon={item.icon}
          heading={item.heading}
          text={item.text}
          onClick={handleClick}
        />
      )}
    />
  );
};

export default PeerTypeModal;
