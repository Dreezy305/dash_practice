import React from "react";
import "./featuredInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">-11.4</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
