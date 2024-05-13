import logo from "../../images/Logo.png";
const Header = () => {
  return (
    <div className="header">
      <span className="logo-container">
        <img className="logo" src={logo} />
      </span>
      <span className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </span>
    </div>
  );
};

export default Header;