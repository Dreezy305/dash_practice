import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Avatar from "../../../assets/avatar_two.svg";
import { userRows } from "../../../data";
import { Link } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/lab";

function UserList() {
  const [data, setData] = useState(userRows);
  // const [alert, setAlert] = useState(false);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>{" "}
            <DeleteOutline
              className="userListDelete"
              onClick={() => {
                handleDelete(params.row.id);
                // setAlert(true);
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      {/* {alert && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          User Successfully deleted<strong>!</strong>
        </Alert>
      )} */}
      <DataGrid
        rows={data}
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
