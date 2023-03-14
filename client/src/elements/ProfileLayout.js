import React from "react";
import { Outlet } from "react-router-dom";
import ProfileNav from "./ProfileNav";

export default function ProfileLayout() {
  return (
    <div className="layout__profile">
      <div className="layout__profile-navbar">
        <ProfileNav />
      </div>
      <div className="layout__profile-main">
        <Outlet />
      </div>
    </div>
  );
}
