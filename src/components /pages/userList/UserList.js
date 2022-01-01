import React from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import Avatar from "../../../assets/avatar_two.svg";

function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
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
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UserList;
// 1:24:47
