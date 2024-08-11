import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="  w-[80%] mx-auto   text-white p-4 flex justify-between">
      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          style={(e) => {
            return { color: e.isActive ? "red" : "" };
          }}
          className="text-lg text-black font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/user"
          className={(e) => {
            return [
              e.isActive
                ? "text-red-300 font-bold hover:text-blue-600"
                : "text-lg text-black font-bold",
            ].join(" ");
          }}
        >
          User
        </NavLink>
        <NavLink to="/about">
          {(e) => {
            return (
              <span
                className={[
                  e.isActive ? "text-red-300" : "text-lg text-black font-bold",
                ].join(" ")}
              >
                About
              </span>
            );
          }}
        </NavLink>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
