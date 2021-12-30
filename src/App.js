import TopBar from "./components /topbar/TopBar";
import Sidebar from "./components /sidebar/Sidebar";
import "./app.css";

function App() {
  return (
    <div className="">
      <TopBar />
      <div className="container">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
