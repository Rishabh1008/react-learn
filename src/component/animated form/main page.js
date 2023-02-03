import React, { useEffect } from "react";
import MyCard from "./cardcompo";
import formData from "./formdata";
import "./style.css";

function MyAnimatedForm() {
  function myClick(id) {
    const test = document.getElementById(id);
    const f = document.getElementById("foo");
    f.style.transform = `translate(${test.offsetLeft - 216}px,${test.offsetTop - 124}px)`;
  }

  useEffect(() => {
    const test = document.getElementById("Data1");
    const f = document.getElementById("foo");
    console.log('aaa' , test.offsetLeft )
    f.style.left = `${test.offsetLeft + 27}px`;
    f.style.top = `${test.offsetTop + 0}px`;
    
  }, [])

  return (
    <div>
      <div id="foo" className="ball"></div>
      <div className="wrapper">
        {formData.map((formData, index) => (
          <div id={formData.id} key={formData.id}>
            <MyCard formData={formData} myClick={myClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyAnimatedForm;
