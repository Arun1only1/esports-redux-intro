import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import DisplayProduct from "./components/DisplayProduct";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <DisplayProduct />
      <Counter />
    </>
  );
};

export default App;
