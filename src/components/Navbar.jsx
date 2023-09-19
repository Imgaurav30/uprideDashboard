import React from "react";
import icon from "../assets/logo.svg";
import assets from "../assets/Vector.svg";
import{AiFillHome} from "react-icons/ai"
import{GiReceiveMoney} from "react-icons/gi"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-pink-700 to-red-400 min-h-screen py-5 px-8 flex flex-col gap-8 w-">
      <div className="logo-container">
        <img src={icon} className="logo-img" alt="logo" />
      </div>
      <div className="flex flex-col text-2xl text-white font-medium">
        <div className="py-2 flex gap-3 items-center">
          <AiFillHome className="menus-icon" />
          <p>Home</p>
        </div>
        <div className="py-2 flex gap-3 items-center">
          <GiReceiveMoney className="menus-icon" />
          <p>My Earning</p>
        </div>
        <div className="py-2 flex gap-3 items-center">
        <AiFillHome className="menus-icon" />
          <p>My Services</p>
        </div>
        <div className="py-2 flex gap-3 items-center">
          <div className="align-middle">
          <img src={assets} alt="" className="align-middle flex items-center" />
          </div>
          <p>My Assets</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
