import React from "react";
import "./widgetSm.css";
import Avatar from "../../assets/avatar_two.svg";
import { Visibility } from "@material-ui/icons";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={Avatar} alt="avatar_widget" className="widgetSmgIMg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar} alt="avatar_widget" className="widgetSmgIMg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar} alt="avatar_widget" className="widgetSmgIMg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar} alt="avatar_widget" className="widgetSmgIMg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img src={Avatar} alt="avatar_widget" className="widgetSmgIMg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
