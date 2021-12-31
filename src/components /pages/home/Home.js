import React from "react";
import "./home.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../Chart/Chart";
import { userData } from "../../../data";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Ananlytics"
        dataKey="Active User"
        grid={true}
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
