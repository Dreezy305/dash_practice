import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import TopBar from "./components /topbar/TopBar";
import Sidebar from "./components /sidebar/Sidebar";
import Home from "./components /pages/home/Home";
import UserList from "./components /pages/userList/UserList";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
