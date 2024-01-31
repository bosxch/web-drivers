import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <div className="navbar-displayer">
        <div className="f1-logo">
        <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png"
            height={40}
            width={40}
          />
        </NavLink>

        </div>
        <div className="nav-container">
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to="/create"
          >
            Create Driver
          </NavLink>
        </div>
      </div>
    );
  }

  return null;
}
