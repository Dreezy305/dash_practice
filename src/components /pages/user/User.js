import React from "react";
import "./user.css";
import Avatar from "../../../assets/avatar_two.svg";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create </button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={Avatar} className="userShowImg" alt="avatar" />
            <div className="userShowTopTitle"></div>
          </div>
          <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
}

export default User;
