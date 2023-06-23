import sunIcon from "../assets/icon-sun.svg";
import moonIcon from "../assets/icon-moon.svg";

const Header = ({ theme, handleThemeToggle }) => {
  const icon = theme === "light" ? moonIcon : sunIcon;
  return (
    <div className="header">
      <h1>TODO</h1>
      <button className="theme-toggle" onClick={handleThemeToggle}>
        <img src={icon} alt="" />
      </button>
    </div>
  );
};

export default Header;
