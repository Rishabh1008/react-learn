import React, { useState } from "react";
import MyFormFill from "./form";
import MyButton from "./button";
import Dashboard from "./dashboard";
import Modal from "./modal";
import "./style.css";

const initialObj = {
  studentId: "",
  studentName: "",
  studentClass: "",
  studentAddress: "",
};
function MyPage() {
  const [formData, setFormData] = useState([]);
  const [temData, setTemData] = useState(initialObj);

  const updateFormData = (e) => {
    const localState = { ...temData };
    localState[e.target.name] = e.target.value;
    setTemData(localState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localState = [...formData];
    localState.push(temData);
    setFormData(localState);
    setTemData(initialObj);
  };

  const handleDelete = (index) => {
    const deleteFormData = formData
      .slice(0, index)
      .concat(formData.slice(index + 1));
    setFormData(deleteFormData);
  };

  const handleUpdate = () => {
    const localState = [...formData];
    const activeIndex = localState.findIndex(
      (x) => x.studentId === temData.studentId
    );
    localState[activeIndex] = temData;
    setFormData(localState);
    setIsShown(() => false);
  };

  const [isShown, setIsShown] = useState(false);

  const handleModalShow = (index) => {
    setIsShown((current) => !current);
    setTemData(formData[index]);
    
  };

  return (
    <div>
      <MyFormFill updateFormData={updateFormData} data={temData} />
      <MyButton handleSubmit={handleSubmit} />
      <Dashboard
        handleModalShow={handleModalShow}
        handleDelete={handleDelete}
        formData={formData}
      />
      <div>
        {isShown && (
          <Modal
            handleUpdate={handleUpdate}
            updateFormData={updateFormData}
            data={temData}
          />
        )}
      </div>
    </div>
  );
}
export default MyPage;
