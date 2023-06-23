import Filter from "./Filter";
const Footer = ({ handleFilter, count, filter }) => {
  return (
    <div className="footer">
      <p className="footer-text">{count} items left</p>
      {window.innerWidth > 420 && <Filter handleFilter={handleFilter} filter={filter} />}
      <button id="clearAll" onClick={handleFilter} className="footer-text footer-btn">
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
