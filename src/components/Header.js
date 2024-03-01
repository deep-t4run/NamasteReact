import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Title from "./Title.js";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Header Rendered");
  }, []);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="header">
      <div className="logo-container">
        <Title />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
        </ul>
        {isLoggedIn ? (
          <button className="login" onClick={handleLogoutClick}>
            <Link to="/">Logout</Link>
          </button>
        ) : (
          <button className="login" onClick={handleLoginClick}>
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>

      {/* {isLoggedIn ? (
        <button className="login" onClick={handleLogoutClick}>
          Logout
        </button>
      ) : (
        <button className="login" onClick={handleLoginClick}>
          Login
        </button>
      )} */}
    </div>
  );
};

export default Header;
