import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Loader() {
  return (
    <div className="loader">
      <div className="loader__box">
        <ScaleLoader size={300} color="#36d7b7" />
      </div>
    </div>
  );
}
