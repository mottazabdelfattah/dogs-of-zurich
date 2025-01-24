import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { COLUMN_WIDTH, ROW_HEIGHT } from "../../../constants";
import useTooltip from "../../../utils/useTooltip";
import Tooltip from "../../../utils/Tooltip";

export default function BreedAgeHistogram({ ageHistogram, histogramDomain }) {
  const svgRef = useRef(null);
  const { tooltipText, tooltipStyle, showTooltip, hideTooltip } = useTooltip();

  useEffect(() => {
    const margin = { top: 0, right: 0, bottom: 0, left: 0 };
    const svgWidth = COLUMN_WIDTH - margin.left - margin.right;
    const svgHeight = ROW_HEIGHT - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr("width", svgWidth + margin.left + margin.right)
      .attr("height", svgHeight + margin.top + margin.bottom)
      .style("background-color", "rgba(0, 0, 0, 0.05)");

    svg.selectAll("*").remove(); // cleanup

    const chartGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const dataArray = Object.entries(ageHistogram).map(([year, count]) => ({
      year: parseInt(year),
      count: count,
    }));

    const sum = dataArray.reduce((acc,d)=>acc+d.count,0);
    
    const extent = d3.extent(dataArray, (d) => d.count);

    const x = d3
      .scaleBand()
      .domain(histogramDomain)
      .range([0, svgWidth])
      .padding(0.1);

    const y = d3.scaleLinear().domain(extent).range([0, svgHeight]);

    // chart
    const bars = chartGroup.selectAll("rect")
      .data(dataArray)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.year))
      .attr("y", (d) => svgHeight - y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => y(d.count))
      .attr("fill", "rgb(5,113,176)")
      .attr("data-tooltip", (d) => `${d.year} (${(d.count/sum*100).toFixed(1)}%)`)
      .on('mouseover',()=>{showTooltip(d3.event)})
      .on('mouseout',()=>{hideTooltip(d3.event)});
      
   
    

    
  }, [ageHistogram, histogramDomain]);

  return (
    <>
      <Tooltip tooltipStyle={tooltipStyle} tooltipText={tooltipText} />
      <svg ref={svgRef}></svg>
    </>
  );
}
