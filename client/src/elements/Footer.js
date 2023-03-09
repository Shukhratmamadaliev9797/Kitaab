import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <h3>Kitaab Store</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            exercitationem obcaecati fuga eos, aspernatur distinctio iure optio
            quas assumenda amet?
          </p>
          <h4>Follow us</h4>
          <ul>
            <li>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__quickLinks">
          <h4>Menu</h4>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>All books</Link>
            </li>
            <li>
              <Link>Bestsellers</Link>
            </li>
            <li>
              <Link>Author</Link>
            </li>
          </ul>
        </div>
        <div className="footer__quickLinks">
          {" "}
          <h4>Quick Help</h4>
          <ul>
            <li>
              <Link>Help</Link>
            </li>
            <li>
              <Link>Order Status</Link>
            </li>
            <li>
              <Link>Contact US</Link>
            </li>
            <li>
              <Link>Return</Link>
            </li>
          </ul>
        </div>
        <div className="footer__quickLinks">
          {" "}
          <h4>Category</h4>
          <ul>
            <li>
              <Link>Business</Link>
            </li>
            <li>
              <Link>Children</Link>
            </li>
            <li>
              <Link>Technology</Link>
            </li>
            <li>
              <Link>Fiction</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
