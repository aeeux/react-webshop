import { Link, Outlet } from "react-router-dom";
import React from "react";

function Nav() {
  return (
    <>
      <nav class="w-full px-96 fixed z-50 flex right-0 top-12 justify-between">
        <h2 className="text-4xl">
          <Link to="/">🍋</Link>
        </h2>
        <div className="space-x-10">
          <Link to="/lorem">Item</Link>
          <Link to="/lorem">Item</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;
