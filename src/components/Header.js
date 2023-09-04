import { useEffect, useState } from "react";
import { APP_LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");

  useEffect(() => {
    console.log("useEffect called");
  }, [login]);

  console.log("Header rendered");

  const ChangeLoginButtonText = () => {
    let newVal = login === "Login" ? "Logout" : "Login";
    setLogin(newVal);
  };

  return (
    <div id="header">
      <div className="logo-container">
        <img className="logo" src={APP_LOGO_URL} alt="logo text" />
      </div>
      <div className="nav-items">
        <ul>
          <li id="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li id="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li id="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li id="nav-item">Cart</li>
          <button className="login" onClick={() => ChangeLoginButtonText()}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
