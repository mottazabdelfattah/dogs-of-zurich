export default function GridHeader({
  columns,
  onHeaderClicked,
  sortedColumnIdx,
  isAsc,
  children
}) {
  const headers = Object.values(columns).map((c, index) => (
    <div className="header-item" key={index}>
      
      <p className="header-label">
        {c.label}
        {c.sortFunctionAsc ? (
          <button
            className="sort-button"
            type="button"
            onClick={() => onHeaderClicked(index)}
          >
            {sortedColumnIdx === index ? (
              <span>{isAsc ? "↑" : "↓"}</span>
            ) : (
              <span>↕</span> 
            )}
          </button>
        ) : (
          ""
        )}
      </p>
      {children[index]} {/* header charts are rendered here */}
    </div>
  ));
  return <div className="grid-header">{headers}</div>;
}
