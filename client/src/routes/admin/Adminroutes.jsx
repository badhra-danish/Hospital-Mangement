import React from "react";
import { Route, Routes } from "react-router-dom";
import Appointment from "../../pages/admin/Appointment";
import Layout from "../../layouts/admin/layout";
import Patient from "../../pages/admin/Patient";
function Adminroutes() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Layout />}>
          <Route path="/admin/dashboard" element={<Appointment />} />
          <Route path="/admin/patient" element={<Patient />} />
        </Route>
      </Routes>
    </>
  );
}

export default Adminroutes;
