import React from "react";
import Categories from "../elements/Categories";
import Discount from "../elements/Discount";
import Header from "../elements/Header";
import TheBestSellers from "../elements/TheBestSellers";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <Discount />
      <TheBestSellers />
    </div>
  );
}
