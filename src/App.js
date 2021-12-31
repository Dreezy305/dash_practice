import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css";
import TopBar from "./components /topbar/TopBar";
import Sidebar from "./components /sidebar/Sidebar";
import Home from "./components /pages/home/Home";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Home />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
