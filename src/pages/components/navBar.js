import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md px-3 bg-prim"
        style={{ zIndex: 2 }}
      >
        <Link to="/Home" className="navbar-brand fs-5 fw-bold text-white py-1">
          Lost & Found Portal
        </Link>

        <button
          className="btn d-md-none py-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + props.id}
        >
          <span className="fa fa-bars fs-4 text-white"></span>
        </button>

        <div className="collapse navbar-collapse" id={props.id}>
          <div className="navbar-nav ms-auto">
            <Link to="/Profile" className="nav-link text-white mx-md-2">
              <span className="d-block d-md-none">Profile</span>
              <span className="fa fa-user fs-3 d-none d-md-block"></span>
            </Link>

            <div className="dropdown">
              <Link
                className="nav-link text-white mx-md-2"
                data-bs-toggle="dropdown"
                data-bs-target="#nav-dropdown"
              >
                <span className="d-block">Categories</span>
                <span className="fa fa-bars fs-3"></span>
              </Link>

              <ul className="dropdown-menu position-absolute" id="nav-dropdown">
                <li>
                  <Link
                    to="/Uploads"
                    state={{ filter: "Electronics" }}
                    className="dropdown-item"
                  >
                    Electronics & Devices
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Uploads"
                    state={{ filter: "Clothing" }}
                    className="dropdown-item"
                  >
                    Clothing & accesssories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Uploads"
                    state={{ filter: "Others" }}
                    className="dropdown-item"
                  >
                    Others
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Uploads"
                    state={{ filter: "All" }}
                    className="dropdown-item"
                  >
                    All uploads
                  </Link>
                </li>
              </ul>
            </div>

            <Link to="/Home" className="nav-link text-white mx-md-2">
              <span className="d-block d-md-none">Home</span>
              <span className="fa fa-home fs-3 d-none d-md-block"></span>
            </Link>

            <button
              onClick={() => window.location.href = "/Search"}
              className="btn btn-primary mx-md-2"
              aria-label="Search"
              title="Search"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px 10px', fontSize: '1.25rem' }}
            >
              <span className="fa fa-search" aria-hidden="true"></span>
              <span className="d-block d-md-none ms-2">Search</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
