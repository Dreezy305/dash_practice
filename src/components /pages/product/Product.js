import { Link } from "@material-ui/core";
import React from "react";
import Chart from "../../Chart/Chart";
import { ProductData } from "../../../data";
import Avatar from "../../../assets/avatar_two.svg";
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
        <div className="productTopLeft">
          <Chart
            data={ProductData}
            dataKey="Sales"
            title="Sales Performance"
            grid={true}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={Avatar} className="productInfoImg" alt="product_image" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5,123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft"></div>
          <div className="productFormLeft"></div>
        </form>
      </div>
    </div>
  );
}

export default Product;
