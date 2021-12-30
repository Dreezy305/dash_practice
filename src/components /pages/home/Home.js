import React from "react";
import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../Chart/Chart";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart />
    </div>
  );
}

export default Home;
