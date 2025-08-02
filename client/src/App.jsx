import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Sidebar from "./layouts/admin/sidebar";
import Adminroutes from "./routes/admin/Adminroutes";
import Navbar from "./layouts/Navbar";
import "./assets/css/main.css";
import "./App.css";

function App() {
  return (
    <>
      {/* <Adminroutes /> */}
      <Navbar />
    </>
  );
}

export default App;
