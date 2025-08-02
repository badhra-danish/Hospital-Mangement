import { Search } from "lucide-react";
import { BellRing } from "lucide-react";
import "../../assets/css/admin/navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="dashboard-navbar">
        <div className="dashboard-navbar-seach-input">
          <input type="text" placeholder="Search..." />
          <Search />
        </div>
        <div className="dashboard-nav-notification-bell-profile">
          <div className="dashboard-nav-notification-bell">
            <BellRing />
          </div>
          <div className="dashboard-nav-profile">
            {/* <img src={DashboardProfile} alt="profile-logo" /> */}
            <div className="dashboard-nav-profile-name">
              <span>Health-Care</span>
              <p>Admin</p>
            </div>
            {/* <TiArrowSortedDown /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
