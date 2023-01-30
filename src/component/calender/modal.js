import { makeStyles } from "@material-ui/core";
import React from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import ModalBody from "./modalbody";
const useStyles = makeStyles({
  modalMain: {
    border: "1px solid white",
    width: "100%",
    maxWidth: "265px",
    marginLeft: "20px",
    backgroundColor: "white",
    borderRadius: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    padding: "20px 0 10px 0",
  },
  modalHead: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  leftIcon: {
    width: "30px;",
    background: "white",
    border: "none",
    borderRadius: "5px",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    paddingTop: "5px",
  },
  rightIcon: {
    background: "white",
    width: "30px",
    border: "none ",
    borderRadius: "5px",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    paddingTop: "5px",
  },
  modalContent: {
    minHeight: "185px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    padding: "0px 10px",
  },
  cancelButton: {
    textAlign: "center",
    marginTop: "10px",
  },
  cancelCustomButton: {
    color: "black",
    backgroundColor: "white",
    border: "1px solid #a5a5a5",
  },
  applyCustomButton: {
    color: "white",
    backgroundColor: "black",
    border: "none",
  },
  button: {
    padding: "7px 20px",
    borderRadius: "10px",
    margin: "5px",
    cursor: 'pointer',
  },
  margin: {
    margin: "0",
  },
});

function MyModal(props) {
  const {
    BoxContent,
    handleBack,
    handleCancel,
    handleSelect,
    handleNext,
    data,
  } = props;
  const classes = useStyles();

  return (
    <>
      <div className={classes.modalMain}>
        <div className={classes.modalHead}>
          <button className={classes.leftIcon} onClick={handleBack}>
            <AiOutlineLeft />
          </button>
          <h4 className={classes.margin}>{data.year}</h4>
          <button className={classes.rightIcon} onClick={handleNext}>
            <AiOutlineRight />
          </button>
        </div>
        <div className={classes.modalContent}>
          {BoxContent.map((BoxContent, index) => {
            return (
              <ModalBody
                data={BoxContent}
                index={index}
                activeYear= {data.year}
                handleSelect={handleSelect}
              />
            );
          })}
        </div>
        <ul></ul>
        <div className={classes.cancelButton}>
          <button className={`${classes.cancelCustomButton}  ${classes.button}`} onClick={handleCancel}>
            Cancel
          </button>
          <button className={`${classes.applyCustomButton} ${classes.button}`} onClick={handleCancel}>
            Apply
          </button>
        </div>
      </div>
    </>
  );
}

export default MyModal;
