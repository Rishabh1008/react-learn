import { Typography,  makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import YearField from "./mySlider";
import { RateField } from "./mySlider";

const useStyles = makeStyles({
  sliderContainer: {
    
  },
});

function MyCalculator() {
  
    const [temData, setTemData] = useState({
      amount: 0,
      year: 0,
      rate: 0
    });
    const [simpleInt, setSimpleInt] = useState(0);
    const [CompoundInt, setCompoundInt] = useState(0);

    const {amount, year, rate} = temData;

    useEffect(() => {
      setSimpleInt(parseFloat(amount*year*rate/100).toFixed(2));
      setCompoundInt(parseFloat((amount*(Math.pow(1 + rate/100, year)))-amount).toFixed(2))
    })
    
    const updateSimple = (e) => {
      const localState = { ...temData };
      localState[e.target.name] = e.target.value;
      setTemData(localState); 
    };

    const handleSliderChange = (name, value) => {
         const localState = { ...temData };
        localState[name] = value;
        setTemData(localState);
    };

    const classes = useStyles();
  

  return (
    <div className={`${classes.sliderContainer} container`}>
      <div className="container-inner">
        <div className="output mb2">
          <Typography className="">Simple Interest</Typography>
          <Typography className="mb2">₹{simpleInt}</Typography>
          <Typography className="">Compound Interest</Typography>
          <Typography className="">₹{CompoundInt}</Typography>
        </div>
        <div className="inputs">
          <input
            className="amount-control mb2"
            onChange={(e) => updateSimple(e)}   
            name= "amount"
            value={temData.amount}
            type="number" 
          />
          <YearField updateSimple={updateSimple}  handleSliderChange={handleSliderChange} data={temData}/>
          <RateField updateSimple={updateSimple}  handleSliderChange={handleSliderChange} data={temData}/>
        </div>
      </div>
    </div>
    
  );
}
export default MyCalculator;
