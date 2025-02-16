import React from "react";
import ModalStructure from "../../Components/Modals/ModalStructure";
import ModalItem from "../../Components/ModalItem";

import aws_logo from "../../assets/aws.png";
import ansible_logo from "../../assets/ansible.png";
import azure_logo from "../../assets/azure.png";
import docker_logo from "../../assets/docker.png";
import git_logo from "../../assets/git_logo.png";
import kubernetes_logo from "../../assets/kubernetes.png";
import linux_logo from "../../assets/linux.png";
import python_logo from "../../assets/python.png";
import terraform_logo from "../../assets/terraform.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectItem } from "../../redux/selectionSlice";

const InterviewTypeModal = ({ close, setStep, step }) => {
  const modalItems = [
    { icon: aws_logo, text: "Amazon Web Services (AWS) Cloud" },
    { icon: azure_logo, text: "Microsoft Azure" },
    { icon: terraform_logo, text: "Terraform" },
    { icon: linux_logo, text: "Linux Fundamentals for Devops" },
    { icon: ansible_logo, text: "Ansible" },
    { icon: python_logo, text: "Python Fundamentals for Devops" },
    { icon: kubernetes_logo, text: "Kubernetes" },
    { icon: docker_logo, text: "Docker" },
    { icon: git_logo, text: "Git Fundamentals for Devops" },
  ];

  const selectedItem = useSelector((state)=>state.selections)

  const dispatch = useDispatch();
  const handleNext = () => {
    setStep(step + 1);
  };


  const handleClick = (text) => {
    dispatch(selectItem({ interviewType: text })); // Update only the interviewType in the selections
  };

  return (
    <ModalStructure
      title="Select your interview type"
      items={modalItems}
      onClose={close}
      onNext={handleNext}
      showBackButton={false}
      renderItem={(item, index) => (
        <ModalItem
          key={index}
          icon={item.icon}
          text={item.text}
          onClick={handleClick}
        />
      )}
    />
  );
};

export default InterviewTypeModal;
