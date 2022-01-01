import { Link } from "@material-ui/core";
import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft"></div>
        <div className="productTopRight"></div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
}

export default Product;
