import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Title from "./Title.js";
import useOnline from "../utils/useOnLine.js";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

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
    <div className="flex justify-between bg-gray-200 shadow-md">
      <div className="logo-container">
        <Title />
      </div>
      <div className="">
        <ul className="flex py-10 ">
          <Link to="/">
            <li className="p-2 hover:bg-white hover:rounded-lg">Home</li>
          </Link>
          <Link to="/about">
            <li className="p-2 hover:bg-white hover:rounded-lg">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="p-2 hover:bg-white hover:rounded-lg">Contact Us</li>
          </Link>
          <Link to="/">
            <li className="p-2 hover:bg-white hover:rounded-lg">Cart</li>
          </Link>
          <Link to="/instamart">
            <li className="p-2 hover:bg-white hover:rounded-lg">Instamart</li>
          </Link>
          <li className="p-2 hover:bg-white hover:rounded-lg">
            {isOnline ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 m-10"
          onClick={handleLogoutClick}
        >
          <Link to="/">Logout</Link>
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 m-10"
          onClick={handleLoginClick}
        >
          <Link to="/login">Login</Link>
        </button>
      )}
    </div>
  );
};

export default Header;
