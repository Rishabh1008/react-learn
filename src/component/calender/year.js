import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  margin: {
    margin: "0",
  },
  main: {
    display: "flex",
    marginLeft: "20px",
  },
  inputBox: {
    marginLeft: "10px",
    border: "1px solid #a5a5a5",
    backgroundColor: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  inputBoxSpan: {
    margin: "10px",
    color: "gray",
  },
});
function Myyear(props) {
  const { updateState, data } = props;
  const classes = useStyles();
  return (
    <>
      <div className={classes.main}>
        <h4 className={classes.margin}>YEAR</h4>
        <div className={classes.inputBox} onClick={updateState}>
          <span className={classes.inputBoxSpan}>{data.year}</span>
        </div>
      </div>
    </>
  );
}

export default Myyear;
