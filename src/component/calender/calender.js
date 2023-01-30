import React, { useState } from "react";
import Myyear from "./year";
import MyModal from "./modal";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100vh",
    background: "#f2f2f2",
    paddingTop: "30px",
  },
});

function MyCalender() {
  const BoxContent = [];
  for (let i = 1950; i <= 2050; i++) {
    BoxContent.push({ year: i });
  }

  const [isShown, setIsShown] = useState(false);
  const [state, setState] = useState(BoxContent);
  const [select, setSelect] = useState({ year: 2023 });

  const updateState = () => {
    const index = BoxContent.findIndex((x) => x.year === select.year);
    const localstate = BoxContent.slice(index - 8, index + 8);
    setState(localstate);
    setIsShown((current) => !current);
  };

  const handleBack = () => {
    const index = BoxContent.findIndex((x) => x.year === state[0].year);
    const localState = BoxContent.slice(index - 15, index + 1);
    setState(localState);
  };

  const handleNext = () => {
    const index = BoxContent.findIndex((x) => x.year === state[15].year);
    const localState = BoxContent.slice(index, index + 16);
    setState(localState);
  };

  const handleSelect = (index) => {
    setSelect(state[index]);
  };

  const handleCancel = () => {
    setIsShown((current) => !current);
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Myyear updateState={updateState} data={select} />
      {isShown && (
        <MyModal
          BoxContent={state}
          handleBack={handleBack}
          handleSelect={handleSelect}
          handleNext={handleNext}
          data={select}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
}

export default MyCalender;
