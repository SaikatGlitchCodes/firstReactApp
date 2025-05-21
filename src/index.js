import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProductCard from "./component/productCard";
import  { Toaster } from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";

const ProductDetails = [
  {
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREGqtp-YYJUtbYD6ShIVu7GHNbEIZTN3TfCqVSDDdr_VyVZF74WbjTYT8AX33ox5lhpipW0pw2ZoP-E-WJwQzGOMdmaLmAjJ10BQGH4bYgH4wqjzIILGfsNSw",
    name: "Downshifter 13 Road Running Shoes",
    price: "30",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfJiCXn8FH5tkXcHwnKRHUkWBUkybQLTcU7-iB1fnIjGjHeKwxUsiZbR1xwuAMM69gdsDKcG9goMSQU6hy_JrszHVBs5MraOK3mHDfgnsMX9Mhm8bXtwst_g",
    name: "Uplift SC Shoes",
    price: "40",
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScsppiCbo0BxgPDnfePLT0GpYcEvLss-LnHaj145nDYr3chuFqtq13Lph05QI2l4q0EBU3DMkLONGcTTWYvcbhJjYM94He2yW_s0Pfmj2q3lS-694Ank3iA1A",
    name: "Uplift SC Shoes",
    price: "40",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfJiCXn8FH5tkXcHwnKRHUkWBUkybQLTcU7-iB1fnIjGjHeKwxUsiZbR1xwuAMM69gdsDKcG9goMSQU6hy_JrszHVBs5MraOK3mHDfgnsMX9Mhm8bXtwst_g",
    name: "Uplift SC Shoes",
    price: "40",
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScsppiCbo0BxgPDnfePLT0GpYcEvLss-LnHaj145nDYr3chuFqtq13Lph05QI2l4q0EBU3DMkLONGcTTWYvcbhJjYM94He2yW_s0Pfmj2q3lS-694Ank3iA1A",
    name: "Uplift SC Shoes",
    price: "40",
  }
];

const signedUser = false;
const showData = false;

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
    <div className="searchContainer">
          <CiSearch size="1.5em" />
          <input type="text" placeholder="Search..." />
    </div>
    <h1 className="heading"> Welcome to React JS </h1>
    {
      signedUser ? (
        <h2 className="subHeading"> Welcome back, User </h2>
      ) : (
        <h2 className="subHeading"> Please Sign In </h2>
      )
    }
    {
      showData && <h2 className="subHeading"> Data is available </h2>
    }
    <div className="cardContainer">
      {
        ProductDetails.map((product, index)=>{
          return (
            <ProductCard 
              key={index}
              img={product.img} 
              name={product.name} 
              price={product.price}
            />
          )
        })
      }
    </div>
    
  </React.StrictMode>
);

function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2));