import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Avatar from "../../../assets/avatar_two.svg";
import { productRows } from "../../../data";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="productListItem" style={{}}>
            <img
              src={params.row.img}
              className="productListImage"
              alt="user_avatar"
            />{" "}
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>{" "}
            <DeleteOutline
              className="productListDelete"
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
    <div className="productList">
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

export default ProductList;
