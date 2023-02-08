import * as d3 from 'd3'
// import * as d3 from 'd3-selection';
 
const options = {dataUrl: {"labels": [ "Personal Finance", "Residential-Lending", "Dividend Investor", "Financial Planning", "Small Business"], "data": [{"circle0": "Dividend Investor", "x": "Large", "y": "DI", "value": 2}, {"circle0": "Financial Planning", "x": "Large", "y": "FP", "value": 2}, {"circle0": "Personal Finance", "x": "Large", "y": "PF", "value": 2 }, {"circle0": "Small Business", "x": "Large", "y": "BLOC", "value": 2}, {"circle0": "Mortgage/HELOC", "x":
"Large", "y": "HELOC", "value": 2}]}}
 
export default function renderSunburstdiversified() {
   const containerId = options.containerId;
   const dataUrl = options.dataUrl;
  
   console.log(dataUrl);
    /**
    * Constants
    */
    const breadcrumbDimension = {
     width: 125,
     height: 30,
     spacing: 3,
     tipTail: 10
   };
   const legendDimension = {
     width: 145,
     height: 30,
     spacing: 3,
     cornerRadius: 3
   };
   const padding = 10;
   const margin = {
     top: breadcrumbDimension.height + padding * 2,
     right: legendDimension.width + padding * 2,
     bottom: padding,
     left: padding
   };
   const width = 550;
   const height = 450;
   const radius = Math.min(width, height) / 2;
   const svgWidth = width + margin.left + margin.right;
   const svgHeight = height + margin.top + margin.bottom;
    const numberCircles = 3;
   const numberLabels = 11;
    const labelClassScale = d3
     .scaleOrdinal()
     .domain(d3.range(numberLabels))
     .range(d3.range(numberLabels).map(i => `label-${i + 1}`));
    const circleClassScale = d3
     .scaleOrdinal()
     .domain(d3.range(numberCircles))
     .range(d3.range(numberCircles).map(i => `circle-${i + 1}`));
    const container = d3
     .select(`#${containerId}`)
     .classed("sunburst-breadcrumb", true);
    const svg = container
     .append("svg")
     .attr("width", svgWidth)
     .attr("height", svgHeight);
    /**
    * Process data
    */
   console.log('test1', JSON.stringify(dataUrl))
    // d3.json(JSON.stringify(dataUrl)).then(json => {
        console.log('test123')
     labelClassScale.domain(dataUrl.labels);
     
     const nest = d3
       .nest()
       .key(d => d.circle0)
     
       //.key(d => d.circle3)
       //.key(d => d.circle4)
       .rollup(d => d3.sum(d, e => e.value));
      const root = d3
       .hierarchy({ values: nest.entries(dataUrl) }, d => d.values)
       .sum(d => d.value)
       .sort((a, b) => b.value - a.value);
      const partition = d3.partition().size([2 * Math.PI, radius * radius]);
     partition(root);
      const presentLabels = root.children.map(d => d.data.key);
      const arc = d3
       .arc()
       .startAngle(d => d.x0)
       .endAngle(d => d.x1)
       .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
       .padRadius(radius / 2)
       .innerRadius(d => Math.sqrt(d.y0))
       .outerRadius(d => Math.sqrt(d.y1) - 1);
      // Total value is the tree root value
     const totalSize = root.value;
      /**
      * Sunburst
      */
     const gSunburst = svg
       .append("g")
       .attr("class", "sunburst-g")
       .attr(
         "transform",
         `translate(${margin.left + width / 2},${margin.top + height / 2})`
       )
       .on("mouseleave", mouseleave);
      // Bounding circle underneath the sunburst, to make it easier to detect
     // when the mouse leaves the parent g.
     gSunburst
       .append("circle")
       .attr("r", radius)
       .attr("opacity", 0);
      const segment = gSunburst
       .append("g")
       .selectAll("path")
       .data(root.descendants().filter(d => d.depth))
       .enter()
       .append("path")
       .attr("class", d => {
         let e = d;
         while (e.depth > 1) e = e.parent;
         d.labelClass = labelClassScale(e.data.key);
         d.circleClass = circleClassScale(d.depth - 1);
         return `${d.labelClass} ${d.circleClass}`;
       })
       .attr("d", arc)
       .on("mouseover", mouseover);
      const centerText = gSunburst
       .append("text")
       .attr("class", "sunburst-center-text")
       .attr("text-anchor", "middle")
       .style("visibility", "hidden");
      
     const centerTextTicker = centerText
       .append("tspan")
       .attr("x", 0)
       .attr("y", 0)
       .attr("dy", "-2em");
      const centerTextPercentage = centerText
       .append("tspan")
       .attr("x", 0)
       .attr("y", 0)
       .attr("dy", "-0.2em");
      const centerTextValue = centerText
       .append("tspan")
       .attr("x", 0)
       .attr("y", 0)
       .attr("dy", "0.9em");
      
      
      function mouseleave(d) {
       // Hide the breadcrumb trail
       breadcrumb.style("visibility", "hidden");
        // Deactivate all segments during transition.
       segment.on("mouseover", null);
        // Transition each segment to full opacity and then reactivate it.
       segment
         .transition()
         .duration(500)
         .style("opacity", 1)
         .on("end", function() {
           d3.select(this).on("mouseover", mouseover);
         });
        centerText.style("visibility", "hidden");
     }
      function mouseover(d) {
       const percentage = ((100 * d.value) / totalSize).toPrecision(3);
       const percentageString = percentage < 0.1 ? "< 0.1%" : `${percentage}%`;
        const sequenceArray = d.ancestors().reverse();
       sequenceArray.shift(); // remove root node from the array
       updateBreadcrumbs(sequenceArray, percentageString);
       breadcrumb.style("visibility", "visible");
        // Fade all the segments.
       segment.style("opacity", 0.3);
        // Then highlight only those that are an ancestor of the current segment.
       segment.filter(d => sequenceArray.includes(d)).style("opacity", 1);
        centerText.style("visibility", "visible");
        centerTextTicker.text(d.data.key);
       centerTextPercentage.text(percentageString);
       centerTextValue.text(d3.format(",")(d.value));
     }
      /**
      * Breadcrumb
      */
     const breadcrumb = svg
       .append("g")
       .attr("class", "breadcrumb-g")
       .attr("transform", `translate(${padding},${padding})`);
      // Add label at the end for the percentage
     const breadcrumbEndLabel = breadcrumb.append("text").attr("fill", "#000");
      // Update the breadcrumb trail to show the current sequence and percentage.
     function updateBreadcrumbs(nodeArray, percentageString) {
       // Data join; key function combines key and depth (= position in sequence).
       var trail = breadcrumb
         .selectAll("g")
         .data(nodeArray, d => d.data.key + d.depth);
        // Remove exiting nodes.
       trail.exit().remove();
        // Add breadcrumb and label for entering nodes.
       var trailEnter = trail.enter().append("g");
        trailEnter
         .append("polygon")
         .attr("points", breadcrumbPoints)
         .attr("class", d => `${d.labelClass} ${d.circleClass}`);
        trailEnter
         .append("text")
         .attr(
           "x",
           (breadcrumbDimension.width + breadcrumbDimension.tipTail) / 2
         )
         .attr("y", breadcrumbDimension.height / 2)
         .attr("dy", "0.35em")
         .attr("text-anchor", "middle")
         .attr("fill", "#fff")
         .text(d => d.data.key);
        // Merge enter and update selections; set position for all nodes.
       trailEnter
         .merge(trail)
         .attr(
           "transform",
           (d, i) =>
             `translate(${i *
               (breadcrumbDimension.width + breadcrumbDimension.spacing)},0)`
         );
        // Now move and update the percentage at the end.
       breadcrumbEndLabel
         .attr(
           "x",
           (nodeArray.length + 0.5) *
             (breadcrumbDimension.width + breadcrumbDimension.spacing)
         )
         .attr("y", breadcrumbDimension.height / 2)
         .attr("dy", "0.35em")
         .attr("text-anchor", "middle")
         .text(percentageString);
     }
      // Generate a string that describes the points of a breadcrumb polygon.
     function breadcrumbPoints(d, i) {
       const points = [];
       points.push("0,0");
       points.push(breadcrumbDimension.width + ",0");
       points.push(
         breadcrumbDimension.width +
           breadcrumbDimension.tipTail +
           "," +
           breadcrumbDimension.height / 2
       );
       points.push(breadcrumbDimension.width + "," + breadcrumbDimension.height);
       points.push("0," + breadcrumbDimension.height);
       if (i > 0) {
         // Leftmost breadcrumb; don't include 6th vertex.
         points.push(
           breadcrumbDimension.tipTail + "," + breadcrumbDimension.height / 2
         );
       }
       return points.join(" ");
     }
     /**
      * Legend
      */
     const gLegend = svg
       .append("g")
       .attr(
         "transform",
         `translate(${margin.left + width + padding}, ${padding})`
       );
      const checkboxField = gLegend
       .append("foreignObject")
       .attr("x", 0)
       .attr("y", 50)
       .attr("width", legendDimension.width)
       .attr("height", 20)
       .append("xhtml:div");
     checkboxField
       .append("input")
       .attr("type", "checkbox")
       .attr("id", "sunburst-breadcrumb-legend-checkbox")
       .on("click", toggleLegend);
     checkboxField
       .append("label")
       .attr("for", "sunburst-breadcrumb-legend-checkbox")
       .text("Legend");
      const legendContainer = gLegend
       .append("g")
       .attr("transform", "translate(0, 20)")
       .style("visibility", "visible");
     const legendItem = legendContainer
       .selectAll("g")
       .data(dataUrl.labels.filter(d => presentLabels.includes(d)))
       .enter()
       .append("g")
       .attr(
         "transform",
         (d, i) =>
           `translate(0,${50+ i *
             (legendDimension.height + legendDimension.spacing)})`
       );
     legendItem
       .append("rect")
       .attr("rx", legendDimension.cornerRadius)
       .attr("width", legendDimension.width)
       .attr("height", legendDimension.height)
       .attr("class", d => labelClassScale(d));
     legendItem
       .append("text")
       .attr("x", legendDimension.width / 2)
       .attr("y", legendDimension.height / 2)
       .attr("dy", "0.35em")
       .attr("text-anchor", "middle")
       .attr("fill", "#fff")
       .text(d => d);
      function toggleLegend() {
       console.log(legendContainer.style("visibility"));
       if (legendContainer.style("visibility") === "visible") {
         legendContainer.style("visibility", "visible");
       } else {
         legendContainer.style("visibility", "visible");
       }
     }
  //  }).catch(e => console.log('test error :', e));
 }