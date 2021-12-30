import React from "react";
import "./featuredInfo.css";
import { ArrowDownward } from "@material-ui/icons";

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
