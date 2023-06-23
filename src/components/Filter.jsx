const Filter = ({ handleFilter, filter }) => {
  return (
    <div className="filter-container">
      <button
        style={{ color: filter === "all" ? "#3A7CFD" : "" }}
        onClick={handleFilter}
        className="footer-btn"
        id="all"
      >
        All
      </button>
      <button
        style={{ color: filter === "active" ? "#3A7CFD" : "" }}
        onClick={handleFilter}
        className="footer-btn"
        id="active"
      >
        Active
      </button>
      <button
        style={{ color: filter === "completed" ? "#3A7CFD" : "" }}
        onClick={handleFilter}
        className="footer-btn"
        id="completed"
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;
