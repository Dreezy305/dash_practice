import React from "react";
import "./topbar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HuntersWall</span>
        </div>
        <div className="topRight">right</div>
      </div>
    </div>
  );
}

export default TopBar;
