import React from "react";
import "../../assets/css/admin/sidebar.css";
import {
  LayoutDashboard,
  PackageSearch,
  ChartColumnStacked,
  Gift,
  LogOut,
  PlusCircle,
  ListOrdered,
  ChevronDown,
  ChevronUp,
  MapPinned,
  ClipboardPlus,
  BriefcaseMedical,
  Stethoscope,
  UserPlus,
  UserRoundPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [openAppointment, setOpenAppointment] = React.useState(false);
  const [openDoctor, setOpenDoctor] = React.useState(false);

  const [addAppointment, setAddAppointment] = React.useState(false);
  const [patient, setPatient] = React.useState(false);

  const handleOpenAppointment = () => setOpenAppointment((o) => !o);
  const handleOpenDoctor = () => setOpenDoctor((o) => !o);

  const handleClickAddappointment = () => {
    setAddAppointment(true);
    navigate("/admin/dashboard");
  };
  const handleClickPatient = () => {
    setPatient(true);
    setAddAppointment(false);
    navigate("/admin/patient");
  };
  return (
    <>
      <aside className="admin-dashboard-sidebar">
        <div className="admin-sidebar-logo">
          <h4>H-CARE</h4>
        </div>
        <div className="menu-content">
          <h6>MENU</h6>
          <ul>
            <li className="menu">
              {/* <NavLink to="/admin/dashboard"> */}
              <LayoutDashboard />
              Dashboard
              {/* </NavLink> */}
            </li>
            <li className="has-submenu">
              <div className="submenu-title" onClick={handleOpenAppointment}>
                <div className="title">
                  <BriefcaseMedical />
                  Appointments
                </div>

                <div>{openAppointment ? <ChevronUp /> : <ChevronDown />}</div>
              </div>
              {openAppointment && (
                <>
                  <ul className="submenu">
                    <li onClick={handleClickAddappointment}>
                      <ClipboardPlus />
                      Add Appointment
                    </li>
                    <li>
                      <ListOrdered />
                      Total Appointments
                    </li>
                  </ul>
                </>
              )}
            </li>
            <li className="menu" onClick={handleClickPatient}>
              <UserPlus />
              Patient
            </li>
            <li className="has-submenu">
              <div className="submenu-title" onClick={handleOpenDoctor}>
                <div className="title">
                  <Stethoscope />
                  Doctors
                </div>

                <div>{openDoctor ? <ChevronUp /> : <ChevronDown />}</div>
              </div>
              {openDoctor && (
                <>
                  <ul className="submenu">
                    <li>
                      <UserRoundPlus />
                      Add Doctors
                    </li>
                    <li>
                      <ListOrdered />
                      Availabe Doctor
                    </li>
                  </ul>
                </>
              )}
            </li>
          </ul>
        </div>
        <div className="menu-content">
          <h6>OTHERS</h6>
          <ul>
            <li className="menu">
              <LogOut />
              Logout
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
