import React from "react";
import { Route, Routes } from "react-router-dom";
import Outlets from "../../layouts/client/Outlet";
import Home from "../../pages/client/Home";
import About from "../../pages/client/About";
function Clientroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlets />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* other routes are here  */}
        </Route>
      </Routes>
    </>
  );
}

export default Clientroutes;
