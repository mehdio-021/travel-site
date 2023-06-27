import React, { useState } from "react";
import "./Navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState("navbar");

  const showNav = () => {
    setActive("navbar  activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navbar");
  };
  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className={active}>
          <ul className="navLists flex">
            <button className="btn">
              <a href="#">همین حالا رزرو کنید</a>
            </button>
            <li className="navItem">
              <a href="#" className="navLink">
                خانه
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                تورها
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                فروشگاه
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                درباره ی ما
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                صفحه ها
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                اخبار
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                تماس با ما
              </a>
            </li>
          </ul>
          <div className="closeNavbar" onClick={removeNavbar}>
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              سفرمارکت
            </h1>
          </a>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
