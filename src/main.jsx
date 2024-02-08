import ReactDOM from "react-dom/client";
import "./Assets/Styles/global.css";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
// import ChatBody from "./Components/Chat/ChatBody.jsx";
import Chat from "./Pages/Chat/Chat.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/chat" element={<Chat />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
