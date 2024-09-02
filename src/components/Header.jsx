import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div class="container-fluid">
        <Link to={"/"} class="navbar-brand" href="#">
          <img
            src="vite.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Redux Thunk
        </Link>
        <div className="d-flex gap-3">
          <NavLink to={"/"}>Anasayfa</NavLink>
          <NavLink to={"/sepet"}>Sepet</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
