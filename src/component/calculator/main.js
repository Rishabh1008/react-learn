import React from "react";
import ReactJoyride from "react-joyride";
import MyCalculator from "./calculator";
import steps from "./joyride";
import "./style.css";

function MyCalculatorMain(){
    return(
        <>
        <ReactJoyride
        continuous
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps}
      />
             <MyCalculator/>
        </> 
    );
}
export default MyCalculatorMain;