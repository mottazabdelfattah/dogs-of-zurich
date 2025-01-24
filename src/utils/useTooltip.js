import { useState } from "react";
export default function useTooltip() {
  const [tooltipStyle, setTooltipStyle] = useState({
    top: `0px`,
    left: `0px`,
    visibility: `hidden`,
  });
  const [tooltipText, setTooltipText] = useState("");

  function showTooltip(event) {
    const text = event.target.getAttribute("data-tooltip");

    setTooltipText(text);
    const rectBBox = event.target.getBoundingClientRect();
    const x = rectBBox.x; //+ rectBBox.width + 5;
    const y = rectBBox.y + rectBBox.height + window.scrollY;
    setTooltipStyle({
      top: `${y}px`,
      left: `${x}px`,
      visibility: `visible`,
    });
    event.target.classList.add("hovered");
  }

  function hideTooltip(event) {
    setTooltipText("");
    setTooltipStyle({
      visibility: `hidden`,
    });
    event.target.classList.remove("hovered");
  }
  return {
    tooltipText,
    tooltipStyle,
    showTooltip,
    hideTooltip,
  };
}
