import React, { useState } from "react";
import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Avatar from "../../../assets/avatar_two.svg";
import { productRows } from "../../../data";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState(productRows);

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
