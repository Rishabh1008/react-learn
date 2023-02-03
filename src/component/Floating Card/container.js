import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyForm from "./form";
import { useEffect } from "react";
const useStyles = makeStyles({
  inner: {
    minWidth: "500px",
    backgroundColor: "#cafaff",
    padding: "50px",
  },
  main: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  margin: {
    marginBottom: "50px",
  },
  ball: {
    width: "550px",
    height: "240px",
    background: "#c00",
    zIndex: "0",
    top: "174px",
    left: "127px",
    position: "absolute",
    transition: "transform 1s",
  },
});
function MyContainer() {
  const classes = useStyles();

  function myClick(id) {
    const test = document.getElementById(id);
    const f = document.getElementById("foo");
    f.style.transform = `translate(${test.offsetLeft - 162}px,${test.offsetTop - 192}px)`;
    console.log('aaa', test)
  }

  useEffect(() => {
    const test = document.getElementById("form1");
    const f = document.getElementById("foo");
    console.log('aaa' , test.offsetLeft )
    f.style.left = `${test.offsetLeft - 24}px`;
    f.style.top = `${test.offsetTop - 18}px`;
    
  }, [])
 
  return (
    <div className={classes.main}>
      <div id="foo" className={classes.ball}></div>
      <div className={classes.inner}>
        <div id="form1" className={classes.margin}>
          <MyForm id="form1" myClick={myClick}/>
        </div>
        <div id="form2">
          <MyForm id="form2" myClick={myClick}/>
        </div>
      </div>
      <div className={classes.inner}>
        <div id="form3" className={classes.margin}>
          <MyForm id="form3" myClick={myClick}/>
        </div>
        <div id="form4">
          <MyForm id="form4" myClick={myClick}/>
        </div>
      </div>
    </div>
  );
}
export default MyContainer;
