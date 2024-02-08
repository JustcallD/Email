import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default App;
