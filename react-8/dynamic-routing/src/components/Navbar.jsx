import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-400 rounded p-5 flex items-center justify-between">
      <div>logo</div>

      <div className="flex gap-10 text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/service">Services</NavLink>
      </div>

      <div>Login</div>
    </div>
  );
};

export default Navbar;