import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MyForm from "./form";
import { useEffect } from "react";
const useStyles = makeStyles({
  inner: {
    maxWidth: "500px",
    backgroundColor: "#cafaff",
    
  },
  main: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    
  },
  margin: {
    margin: "50px",
  },
  ball: {
    
    background: "#c00",
    zIndex: "1",
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
    f.style.transform = `translate(${test.offsetLeft}px , ${test.offsetTop}px)`;
    console.log('b', f.offsetLeft, test.offsetLeft)
  }
  
  useEffect(() => {
    const test = document.getElementById("form1");
    const f = document.getElementById("foo");
    console.log('aaa', f.offsetLeft, test.offsetLeft)
    f.style.left = `${test.offsetLeft - 20}px`;
    f.style.top = `${test.offsetTop - 20}px`;
    f.style.width = `${test.offsetWidth +40}px`;
    f.style.height = `${test.offsetHeight + 40}px`;
  }, [])
 
  return (
    <div className={classes.main}>
      <div id="foo" className={classes.ball}></div>
      <div className={classes.inner}>
        <div id="form1" className={classes.margin}>
          <MyForm id="form1" myClick={myClick}/>
        </div>
        <div id="form2" className={classes.margin}>
          <MyForm id="form2" myClick={myClick}/>
        </div>
      </div>
      <div className={classes.inner}>
        <div id="form3" className={classes.margin}>
          <MyForm id="form3" myClick={myClick}/>
        </div>
        <div id="form4" className={classes.margin}>
          <MyForm id="form4" myClick={myClick}/>
        </div>
      </div>
    </div>
  );
}
export default MyContainer;
