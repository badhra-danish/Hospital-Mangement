import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../../layouts/client/Layout";
import Home from "../../pages/client/Home";
import About from "../../pages/client/About";
import Services from "../../pages/client/Services";
import Doctor from "../../pages/client/Doctor";
import Appointmentform from "../../pages/client/Appointmentform";
import BlogPage from "../../pages/client/BlogPage";
import FAQSPage from "../../pages/client/FAQSPage";
import ConatactPage from "../../pages/client/ConatactPage";
import SingUp from "../../pages/client/SingUp";
import LoginPage from "../../pages/client/Login";
function Clientroutes() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<SingUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layouts />}>
          <Route path="/register" element={<SingUp />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/appointments" element={<Appointmentform />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/faqs" element={<FAQSPage />} />
          <Route path="/contacts" element={<ConatactPage />} />
          {/* other routes are here  */}
        </Route>
      </Routes>
    </>
  );
}

export default Clientroutes;
