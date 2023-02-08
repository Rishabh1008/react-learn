import React from "react";
import LineChart from "./linechart";
function MyD3jsChart(){
    const ChartData = [
        {
          year: '1990',
          percentage: 17.0671538947666,
        },
        {
          year: '1991',
          percentage: 17.2238189234724,
        },
        {
          year: '1992',
          percentage: 17.5843343506126,
        },
        {
          year: '1993',
          percentage: 17.5984373876898,
        },
        {
          year: '1994',
          percentage: 17.6928633402301,
        },
        {
          year: '1995',
          percentage: 17.755347793459,
        },
        {
          year: '1996',
          percentage: 17.741819656794,
        },
        {
          year: '1997',
          percentage: 17.7683028072844,
        },
        {
          year: '1998',
          percentage: 17.9209223918013,
        },
        {
          year: '1999',
          percentage: 18.1298420308909,
        },
        {
          year: '2000',
          percentage: 17.8993921979056,
        },
        {
          year: '2001',
          percentage: 17.6015066667197,
        },
        {
          year: '2002',
          percentage: 17.6183731904508,
        },
        {
          year: '2003',
          percentage: 17.434098206958,
        },
        {
          year: '2004',
          percentage: 17.0972296583476,
        },
        {
          year: '2005',
          percentage: 17.0434424770035,
        },
        {
          year: '2006',
          percentage: 17.1212606863223,
        },
        {
          year: '2007',
          percentage: 16.9083050750164,
        },
        {
          year: '2008',
          percentage: 17.0350290849647,
        },
        {
          year: '2009',
          percentage: 17.5116086035299,
        },
        {
          year: '2010',
          percentage: 17.2551919506048,
        },
        {
          year: '2011',
          percentage: 17.2097710318662,
        },
        {
          year: '2012',
          percentage: 17.4762365885514,
        },
        {
          year: '2013',
          percentage: 17.6990568614625,
        },
        {
          year: '2014',
          percentage: 17.8701840419389,
        },
        {
          year: '2015',
          percentage: 18.0537549929864,
        },
      ];
    return(
        <LineChart data={ChartData}/>
    );
}
export default MyD3jsChart;