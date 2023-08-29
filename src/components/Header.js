import { APP_LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div id="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO_URL} alt="logo text" />
      </div>
      <div className="nav-items">
        <ul>
          <li id="nav-item">Home</li>
          <li id="nav-item">About</li>
          <li id="nav-item">Contact Us</li>
          <li id="nav-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
