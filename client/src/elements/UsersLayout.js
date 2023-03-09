import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function UsersLayout() {
  return (
    <div>
      <Navbar />
      <div className="body">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
