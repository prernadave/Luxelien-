import "../components/css/navbar.css";
import logoImage from "../components/images/LuxeLien-logos_transparent.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="center-content">

        <div className="logo">
            <img className="logo-img" src={logoImage} alt="logo" />
          </div>
         
          <div className="searchbar">
            <span>
              <input
                className="searchInput"
                type="text"
                name="search"
                placeholder="What are you looking for?"
              />
              <i className="fas fa-search search"></i>
            </span>
          </div>
         
          <div className="cart">
            <i className="fas fa-heart fa-2x heart"></i>
            <i className="fas fa-user fa-2x user"></i>
            <i className="fas fa-shopping-cart fa-2x cart"></i>
          </div>
        </div>
        <div className="dropdown">
        <Dropdown />
      </div>
      </div>
    </>
  );
};

export default Navbar;
