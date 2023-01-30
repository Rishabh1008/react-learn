import React from "react";
import MyFormFill from "./form";


function Modal(props){
    const {updateFormData, handleUpdate, data} = props;


    return(
        <div className="updateform">
        <MyFormFill  updateFormData={updateFormData} data={data} />
        <button onClick={() => handleUpdate()}>update</button>
        </div>
    );
}
export default Modal;
