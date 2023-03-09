import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <form action="">
          <h2>Sign in</h2>
          <input type="email" placeholder="Enter email address" />
          <input type="password" placeholder="Enter password" />
          <button>Sign in</button>
          <div className="login__action">
            <span>Not a member yet? Not a problem</span>
            <Link to="/register">Register to Kitaab Store</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
