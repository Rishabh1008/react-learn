import React, { useEffect, useRef} from "react";
import * as d3 from "d3"
function LineChart(props){
        const svgRef = useRef(null);
        const {data} = props;
        useEffect(() => {         

          const margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          };
          const width = 700 - (margin.left + margin.right);
          const height = 350 - (margin.top + margin.bottom);
          
          const svg = d3
            .select(svgRef.current)
            .append('svg')
            .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
            .attr('width', width)
            .attr('height', height);
          
          // include the visualization in the nested group
          const group = svg
            .append('g')
            .attr('transform', `translate(${margin.left} ${margin.right})`);
          
          // describe the scales for the line chart
          // x-axis: time scale using the years
          const xScale = d3
            .scaleTime()
            .domain([new Date(data[0].year), new Date(data[data.length - 1].year)]) // ! the domain of a time scale describes two date objects
            .range([0, width])
            .nice();
          // y-axis: linear scale using the percentages
          const yScale = d3
            .scaleLinear()
            .domain(d3.extent(data, ({ percentage }) => percentage)) // consider the [minimum, maximum] values
            .range([height, 0]) // flip the range considering the top down nature of the SVG coordinate system
            .nice();
          
          // describe the line function to plot the data through a path element
          // for each data point the line function computes the coordinates based on the input year and percentage
          const line = d3
            .line()
            .x(({ year }) => xScale(new Date(year))) // to obtain the value from the time scale the input needs to be a date object (like the domain)
            .y(({ percentage }) => yScale(percentage));
          
          // add a path element using the line function
          group
            .append('path')
            .attr('d', line(data))
            .attr('fill', 'none')
            .attr('stroke', 'currentColor');
          
          // include the axes based on the defined scales
          const xAxis = d3
            .axisBottom(xScale);
          
          group
            .append('g')
            .attr('transform', `translate(0 ${height})`)
            .call(xAxis);
          
          const yAxis = d3
            .axisLeft(yScale);
          
          group
            .append('g')
            .call(yAxis);



        }, [data]); // redraw chart if data changes  
      
      
    return(
        <svg ref={svgRef} />
    );
}
export default LineChart;