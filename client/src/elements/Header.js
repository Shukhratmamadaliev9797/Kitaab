import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__text">
          <h3>
            <span>Your favourites books,</span>
            <span>All in one place</span>
          </h3>
          <button>Shop now</button>
        </div>
        <div className="header__books">
          <div className="header__books-1">
            <img src="/images/book1.jpeg" alt="" />
          </div>
          <div className="header__books-2">
            {" "}
            <img src="/images/book2.webp" alt="" />
          </div>
          <div className="header__books-3">
            <img src="/images/book5.jpeg" alt="" />
          </div>
          <div className="header__books-4">
            <img src="/images/book4.jpeg" alt="" />
          </div>
          <div className="header__books-5">
            <img src="/images/book3.jpeg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
