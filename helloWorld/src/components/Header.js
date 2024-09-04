import logo from "../../images/Logo.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(() => {
    console.log("Button changed");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  const username = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-sky-700 p-4 shadow-lg mb-2">
      <span className="logo-container">
        <img className="w-48" src={logo} />
      </span>
      <span className="nav-items flex items-center ">
        <ul className="flex p-4 m-4 text-white font-normal">
          <li className="px-4">online :{onlineStatus ? "✅" : "🚫"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">{username.loggedInUser}</li>
          <li className="px-4">
            <Link to="./cart">Cart ({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className=""
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
