import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import MyTable from "./component/table/main";
import MyPage from "./component/form/page";
import MyCalender from "./component/calender/calender";
import MyCalculatorMain from "./component/calculator/main";
import MyAnimatedForm from "./component/animated form/main page";
import MyContainer from "./component/Floating Card/container";

const App = () => {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/calender">Calender</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/animatedform">Animated Form</Link>
        </li>
        <li>
          <Link to="/floatingcard">Floating Card</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/table" element={<MyTable />}></Route>
        <Route path="/form" element={<MyPage />}></Route>
        <Route path="/calender" element={<MyCalender />}></Route>
        <Route path="/calculator" element={<MyCalculatorMain />}></Route>
        <Route path="/animatedform" element={<MyAnimatedForm />}></Route>
        <Route path="/floatingcard" element={<MyContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
