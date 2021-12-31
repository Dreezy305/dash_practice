import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "March",
      "Active User": 2000,
    },
    {
      name: "April",
      "Active User": 2780,
    },
    {
      name: "May",
      "Active User": 1890,
    },
    {
      name: "June",
      "Active User": 2390,
    },
    {
      name: "July",
      "Active User": 3490,
    },
    {
      name: "August",
      "Active User": 3500,
    },
    {
      name: "September",
      "Active User": 4000,
    },
    {
      name: "October",
      "Active User": 4500,
    },
    {
      name: "November",
      "Active User": 5000,
    },
    {
      name: "December",
      "Active User": 5500,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />
          <XAxis dataKey="name" stroke="#5550bd" />

          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="Active User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
