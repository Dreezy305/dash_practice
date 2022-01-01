import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Avatar from "../../../assets/avatar_two.svg";
import { userRows } from "../../../data";
import { Link } from "react-router-dom";

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
            <Link to={"/user/" + params.id}>
              <button className="userListEdit">Edit</button>
            </Link>{" "}
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userRows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
// 1:37:25
