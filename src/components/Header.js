// import { LOGO_URL } from "../config.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title.js";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("Header Rendered");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        {/* <img cla=ssName="logo" src={LOGO_URL} /> */}
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
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="login"
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          className="login"
          onClick={() => {
            setIsLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
