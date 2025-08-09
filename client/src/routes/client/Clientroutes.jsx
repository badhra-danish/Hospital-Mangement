import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../../layouts/client/Layout";
import Home from "../../pages/client/Home";
import About from "../../pages/client/About";
function Clientroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* other routes are here  */}
        </Route>
      </Routes>
    </>
  );
}

export default Clientroutes;
