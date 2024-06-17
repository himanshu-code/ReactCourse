import logo from "../../images/Logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("Button changed");
  }, [btnName]);

  return (
    <div className="header">
      <span className="logo-container">
        <img className="logo" src={logo} />
      </span>
      <span className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="./about">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default Header;
