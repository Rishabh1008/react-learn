import React from "react";
import Chart from "./chart";
function MainChart(){
    const options = {dataUrl: {"labels": [ "Personal Finance", "Residential-Lending", "Dividend Investor", "Financial Planning", "Small Business"], "data": [{"circle0": "Dividend Investor", "x": "Large", "y": "DI", "value": 2}, {"circle0": "Financial Planning", "x": "Large", "y": "FP", "value": 2}, {"circle0": "Personal Finance", "x": "Large", "y": "PF", "value": 2 }, {"circle0": "Small Business", "x": "Large", "y": "BLOC", "value": 2}, {"circle0": "Mortgage/HELOC", "x":
"Large", "y": "HELOC", "value": 2}]}}
    return(
        <Chart options={options}/>
    );
}
export default MainChart;