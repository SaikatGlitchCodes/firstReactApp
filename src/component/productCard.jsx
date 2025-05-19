import React from "react";

const ProductCard = ({img, name, price})=>{

  return (
    <div className="card">
      <img src={img} width="200px" alt="" />
      <h2> {name} </h2>
      <p> Price : $ {price} </p>
    </div>
  );
}

export default ProductCard;
// Exporting : default vs named export
// Default export : only one default export is allowed in a file
// Named export : multiple named exports are allowed in a file