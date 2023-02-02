
import React from "react";
import MyCard from "./cardcompo";
import formData from "./formdata";
import "./style.css";

function MyAnimatedForm() {
 

  function myClick(id){
    
    const test = document.getElementById(id)
    const f = document.getElementById("foo");
    f.style.transform = `translateY(${test.offsetTop - 144}px)`;
    console.log('aaa', test.offsetTop)
  };

  return (
    <div className="wrapper">
      <div id="foo" className="ball"></div>
      <div>
        {formData.map((formData, index) => (
          <div id={formData.id} key={formData.id} >
            <MyCard formData={formData} myClick={myClick}/>
          </div>
        ))}
      </div>
      
    </div>
  );
}
export default MyAnimatedForm;

// className={`${index=== && classes.activeCard}`}
