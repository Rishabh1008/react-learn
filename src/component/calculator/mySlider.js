import { Input, Slider, Typography } from "@material-ui/core";
import React from "react";

export default function YearField(props){

  const {updateSimple, handleSliderChange, data} = props;
  const {year} = data;
   

    return(
        <>
            <Typography>Year</Typography>
           
          <Input
            name= "year"
            value={year}
            onChange={(e) => updateSimple(e)}
            defaultValue={0}
            inputProps={{
              step: 12,
              min: 0,
              max: 60,
              type: "number"
            }}
          />
          <Slider
            defaultValue={0}
            className= "slider mb2"
            onChange={(event, newYear) => handleSliderChange('year', newYear)}
            step={12}
            min={0}
            max={60}
            value={year}
          />
        </>
    );
};

export function RateField(props){

  const {updateSimple, handleSliderChange, data} = props;
  const {rate} = data;

  

  

    return(
        <>
            <Typography>Rate</Typography>
          <Input
            name= "rate"
            value={rate}
            onChange={(e) => updateSimple(e)}
            margin="dense"
            inputProps={{
              step: 0.1,
              min: 0,
              max: 20,
              type: 'number'
            }}
          />
          <Slider
            defaultValue={0}
            className= "slider mb2"
            aria-label="rate"
            onChange={(event, newYear) => handleSliderChange('rate', newYear)}
            step={0.1}
            min={0}
            max={20}
            value={rate}
          />
        </>
    );
};
