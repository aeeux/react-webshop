import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3">
        <div className="container">
          <NavLink className="text-2xl font-black" to="/">
            Baji
          </NavLink>

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0"></ul>
          <div className="buttons">
            <NavLink to="/cart" className="font-black">
              <i className="fa fa-shopping-cart mr-1"></i>
              Cart{" "}
              <span className="border-blue-500 border-2 px-1 rounded-lg">
                {state.length}
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
