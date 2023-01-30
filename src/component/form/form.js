import React from 'react';

function MyFormFill(props){
   
const {updateFormData, data} = props;
const { studentId, studentName, studentClass, studentAddress} = data;

      
    
    return(
        <form >
        <label>
          Enter your Id:
          <input
            value={studentId}
            onChange={(e) => updateFormData(e)}
            type="number"
            name="studentId"
            required
          />
        </label>
        <br />
        <label>
          Enter your name:
          <input
            value={studentName}
            onChange={(e) => updateFormData(e)}
            type="text"
            name="studentName"
            required
          />
        </label>
        <br />
        Enter your Class:
        <select
          name="studentClass"
          value={studentClass}
          onChange={updateFormData}
          required
        >
          <option value="DEFAULT">Choose a Class ...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        Address:
        <textarea
          name="studentAddress"
          onChange={(e) => updateFormData(e)}
          value={studentAddress}
        ></textarea>
        <br />
      </form>
    );
}

export default MyFormFill;