import "./Tooltip.css";
export default function Tooltip({ tooltipText, tooltipStyle }) {
  return (
    <div className="tooltip-container" style={tooltipStyle}>
      <span className="tooltip-text">{tooltipText}</span>
    </div>
  );
}
