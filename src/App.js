import NavBar from "./components/NavbarHeader";
import OverView from "./components/Overview";
import SideBar from "./components/SideBar";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="dashboard">
        <NavBar />
        <OverView />
        <Transactions />
      </div>
    </div>
  );
}

export default App;
