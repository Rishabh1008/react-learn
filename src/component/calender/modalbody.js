import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  yearBox: {
    backgroundColor: "white",
    border: "1px solid white",
    margin: "1px 2px",
    padding: "15px",
    borderRadius: "5px",
    cursor: 'pointer',
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  fontWeight: {
    fontWeight: "500",
    margin: "0",
  },
  activeYear: {
    backgroundColor: "black",
    color: "white",
  }
});

export default function ModalBody(props) {
  const { data, index, handleSelect, activeYear } = props;
  const { year } = data;
  const classes = useStyles();
  return (
    <>
      <button
        className={`${classes.yearBox} ${activeYear===data.year && classes.activeYear}`}
        onClick={() => handleSelect(index)}
        key={`data-${index}`}
      >
        <h5 className={classes.fontWeight}>{year}</h5>
      </button>
    </>
  );
}
