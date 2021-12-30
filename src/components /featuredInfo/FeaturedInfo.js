import React from "react";
import "./featuredInfo.css";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedInfo;
