import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Avatar from "../../../assets/avatar_two.svg";

function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="userListUser" style={{}}>
            <img src={Avatar} className="userListImage" alt="user_avatar" />{" "}
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transactions",
      width: 160,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>{" "}
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "Jon@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Cersei Lanister",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "cer@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "House Tagaryan",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "tar@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Brandon Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "bran@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Edard Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "ed@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Edard Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "ed@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Edard Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "ed@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Edard Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "ed@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Edard Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "ed@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 10,
      username: "Edard Stark",
      avatar:
        "http://cdn4.iconfinder.com/data/icons/socialmediaicons_v120/48/google.png",
      email: "ed@mailinator.com",
      status: "active",
      transaction: "$120.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
// 1:24:47
