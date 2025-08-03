import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./layouts/admin/sidebar";
import Adminroutes from "./routes/admin/Adminroutes";
import Navbar from "./layouts/client/Navbar";
import Footer from "./layouts/client/Footer";
import Clientroutes from "./routes/client/Clientroutes";
import "./assets/css/main.css";
import "./App.css";

function App() {
  return (
    <>
      <Adminroutes />
      <Clientroutes />
    </>
  );
}

export default App;
