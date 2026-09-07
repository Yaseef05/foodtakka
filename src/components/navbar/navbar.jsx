
import React, { useState } from "react";
import LoginPopup from "../LoginPopup/LoginPopup"
import { useNavigate } from "react-router-dom";

import logo from "../../assets/food-takka-logo.svg";
import searchIcon from "../../assets/search_icon.png";
import basketIcon from "../../assets/basket_icon.png";
import Button from "../button/Button";

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
   const navigate = useNavigate();

  const menuItems = ["Home", "Menu", "Mobile App", "Contact Us"];

  const getLink = (item) => {
    if (item === "Home") return "/";
    if (item === "Menu") return "/#menu";
    if (item === "Mobile App") return "/#mobile-app";
    if (item === "Contact Us") return "/#contact";
  };

  const handleMenuClick = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-5">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" onClick={() => handleMenuClick("Home")}>
            <img
              src={logo}
              alt="Food Taka"
              className="w-28 md:w-32"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={getLink(item)}
                  onClick={() => handleMenuClick(item)}
                  className={`cursor-pointer pb-1 transition-colors duration-200 ${
                    active === item
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-5">

            {/* Search */}
            <img
              src={searchIcon}
              alt="Search"
              className="w-5 h-5 cursor-pointer"
            />

            {/* Cart */}
            <div className="relative"
            
      >
              <img
                src={basketIcon}
                alt="Cart"
                className="w-5 h-5 cursor-pointer"
    
                 onClick={() => navigate("/cart")}
              />

              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500"></span>
            </div>

            {/* Sign In */}
            <Button  onClick={() => setShowLogin(true)} variant="outline" size="medium">
              Sign In
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">

            {/* Cart */}
            <div className="relative">
              <img
                src={basketIcon}
                alt="Cart"
                className="w-5 h-5"
                 onClick={() => navigate("/cart")}
              />

              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500"></span>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 border-t border-gray-200 pt-5">

            <ul className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={getLink(item)}
                    onClick={() => handleMenuClick(item)}
                    className={`cursor-pointer ${
                      active === item
                        ? "text-orange-500 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Search + Sign In */}
            <div className="flex items-center gap-4 mt-5">

              <img
                src={searchIcon}
                alt="Search"
                className="w-5 h-5 cursor-pointer"
              />

              <button onClick={() => setShowLogin(true)} className="px-5 py-2 border border-gray-300 rounded-full text-gray-700">
                Sign In
              </button>

            </div>
          </div>
        )}
      </div>
 {/* Login Popup */}
    {showLogin && (
      <LoginPopup onClose={() => setShowLogin(false)} />
    )}

    </nav>
  );
};

export default Navbar;
