import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductCard from "./component/productCard";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="heading"> Welcome to React JS </h1>
    <div className="cardContainer">
      <ProductCard 
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREGqtp-YYJUtbYD6ShIVu7GHNbEIZTN3TfCqVSDDdr_VyVZF74WbjTYT8AX33ox5lhpipW0pw2ZoP-E-WJwQzGOMdmaLmAjJ10BQGH4bYgH4wqjzIILGfsNSw" 
        name="Downshifter 13 Road Running Shoes" 
        price="30"
      />
      <ProductCard 
        img="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfJiCXn8FH5tkXcHwnKRHUkWBUkybQLTcU7-iB1fnIjGjHeKwxUsiZbR1xwuAMM69gdsDKcG9goMSQU6hy_JrszHVBs5MraOK3mHDfgnsMX9Mhm8bXtwst_g" 
        name="Uplift SC Shoes" 
        price="40"
      />
      <ProductCard 
        img="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScsppiCbo0BxgPDnfePLT0GpYcEvLss-LnHaj145nDYr3chuFqtq13Lph05QI2l4q0EBU3DMkLONGcTTWYvcbhJjYM94He2yW_s0Pfmj2q3lS-694Ank3iA1A" 
        name="Uplift SC Shoes" 
        price="40"
      /> 
    </div>
  </React.StrictMode>
);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));