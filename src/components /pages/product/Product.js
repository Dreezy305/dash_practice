import { Link } from "@material-ui/core";
import React from "react";
import Chart from "../../Chart/Chart";
import { ProductData } from "../../../data";
import "./product.css";
import { Publish } from "@material-ui/icons";

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
            <img
              src="http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png"
              className="productInfoImg"
              alt="product_image"
            />
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
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png"
                className="productUploadImg"
                alt="product_upload"
              />
              <label for="file">
                <Publish className="productUploadIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
