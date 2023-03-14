import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signIn } from "../actions/userActions";
import Loader from "../elements/Loader";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email.toLowerCase(), password));
  };
  useEffect(() => {
    if (userInfo) {
      if (userInfo.isAdmin === true) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [userInfo, navigate]);

  return (
    <div className="login">
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <div className="login__container">
        <form action="" onSubmit={submitHandler}>
          <h2>Sign in</h2>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign in</button>
          <div className="login__action">
            <span>Not a member yet? Not a problem</span>
            <Link to="/register">Register to Kitaab Store</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
