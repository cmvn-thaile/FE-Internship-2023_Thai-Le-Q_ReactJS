import React from "react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Recommend from "./components/Recommend";
import Reason from "./components/Reason";
import NewArrived from "./components/NewArrived";
import { useOutletContext } from "react-router-dom";
import { Cart } from "../../../shared/services/types";

export const Index = () => {
  const [productAddToCart, setProductAddToCart] = useOutletContext<any>();

  return (
    <main>
      <Banner />
      <Categories />
      <Recommend setProductAddToCart={setProductAddToCart} />
      <Reason />
      <NewArrived setProductAddToCart={setProductAddToCart} />
    </main>
  );
};
