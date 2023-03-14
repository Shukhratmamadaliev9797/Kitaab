import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

export default function ProfileNav() {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="profileNav">
      <div className="profileNav__container">
        <ul className="profileNav__menu1">
          <li>
            <Link to="/profile/">
              <i class="fas fa-shopping-bag"></i> My Order History
            </Link>
          </li>
          <li>
            <Link to="/profile/selling-orders">
              <i class="fas fa-shopping-cart"></i> My Listings
            </Link>
          </li>
        </ul>
        <ul className="profileNav__menu2">
          <li>
            <Link to="/profile">Personal Details</Link>
          </li>
          <li>
            <Link to="">Payment Details</Link>
          </li>
          <li>
            <Link to="">Contact us</Link>
          </li>
          <li onClick={signOutHandler}>
            <button>Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
