import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">Kitaab Store</div>
        <ul className="navbar__menu">
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            <Link to={""}>About</Link>
          </li>
          <li>
            <Link to={""}>Shop</Link>
          </li>
          <li>
            <Link to={""}>Sell</Link>
          </li>
          <li>
            <Link to={""}>Contact</Link>
          </li>
        </ul>
        <div className="navbar__search">
          <form action="">
            <i class="fas fa-search navbar__search-icon"></i>
            <input type="text" />
          </form>
        </div>
        <ul className="navbar__action">
          <li>
            <Link to="/login">
              <i class="fas fa-sign-in-alt"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i class="fas fa-shopping-basket"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
