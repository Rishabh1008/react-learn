import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MyTable from "./component/table/main";
import MyPage from "./component/form/page";
import MyCalender from "./component/calender/calender";
import MyCalculatorMain from "./component/calculator/main";
import MyAnimatedForm from "./component/animated form/main page";
import MyContainer from "./component/Floating Card/container";
import MyD3jsChart from "./component/d3js chart/chart";
import MainChart from "./component/test D3js/mainchart";
import MainJoyRide from "./component/joyride/mainjoyride";
import ReactJoyride from "react-joyride";
import steps from "./component/joyride/Joyride";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  list: {
    display: "flex",
    flexDirection: "column",
    width: "10%",
    '& li': {
      padding: "30px 0",
      backgroundColor: "#faf1d7",
    },
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ReactJoyride
        continuous
        hideCloseButton
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={steps}
      />
      <ol className={classes.list}>
        <li className="table">
          <Link to="/table">Table</Link>
        </li>
        <li className="form">
          <Link to="/form">Form</Link>
        </li>
        <li className="calender">
          <Link to="/calender">Calender</Link>
        </li>
        <li className="calculator">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="animatedform">
          <Link to="/animatedform">Animated Form</Link>
        </li>
        <li className="floatingcard">
          <Link to="/floatingcard">Floating Card</Link>
        </li>
        <li className="D3jschart">
          <Link to="/D3jschart">D3js Chart</Link>
        </li>
        <li className="TestChart">
          <Link to="/TestChart">Test Chart</Link>
        </li>
        <li className="mainjoyride">
          <Link to="/mainjoyride">Main Joy Ride</Link>
        </li>
      </ol>
      <Routes>
        <Route path="/table" element={<MyTable />}></Route>
        <Route path="/form" element={<MyPage />}></Route>
        <Route path="/calender" element={<MyCalender />}></Route>
        <Route path="/calculator" element={<MyCalculatorMain />}></Route>
        <Route path="/animatedform" element={<MyAnimatedForm />}></Route>
        <Route path="/floatingcard" element={<MyContainer />}></Route>
        <Route path="/D3jschart" element={<MyD3jsChart />}></Route>
        <Route path="/TestChart" element={<MainChart />}></Route>
        <Route path="/mainjoyride" element={<MainJoyRide />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
