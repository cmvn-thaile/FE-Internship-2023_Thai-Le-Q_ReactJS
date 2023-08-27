import React from "react";
import CartTable from "./components/CartTable";

export const index = () => {
  return (
    <div className="container">
      <h2> Shopping Cart</h2>
      <CartTable />
    </div>
  );
};
