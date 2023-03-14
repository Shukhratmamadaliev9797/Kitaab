import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listBook } from "../actions/bookActions";

export default function MyListings() {
  const dispatch = useDispatch();

  const bookList = useSelector((state) => state.bookList);
  const { loading: listLoading, error: listError, bookLists } = bookList;

  useEffect(() => {
    dispatch(listBook());
  }, [dispatch]);

  return (
    <div className="myListings">
      <div className="myListings__container">
        <div className="myListings__title">
          <h2>My Listings</h2>
          <Link to="/create-listing">Create listing</Link>
        </div>
        <div className="myListings__lists">
          {listLoading
            ? "Uploading"
            : listError
            ? listError
            : bookLists.map((book) => {
                return (
                  <div className="myListings__book">
                    <div className="myListings__book-img">im</div>
                    <div className="myListings__book-content">
                      <h2></h2>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
