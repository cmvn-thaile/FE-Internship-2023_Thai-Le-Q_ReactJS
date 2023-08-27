import React from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Recommend from "./components/Recommend";
import Reason from "./components/Reason";
import NewArrived from "./components/NewArrived";

export const Index = () => {
  return (
    <main>
      <Banner />
      <Categories />
      <Recommend />
      <Reason/>
      <NewArrived />
    </main>
  );
};
