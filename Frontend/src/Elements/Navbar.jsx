import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
              {/* Logo and brand name */}
              <a className="navbar-brand d-flex align-items-center ms-4" href="/">
                <img src="/GGLImages/download.png" style={{ height: "80px", width: "100px" }} alt="Logo" />
                <span className="ms-3 text-dark fs-4 fw-bold">RecordSync For Green Gas Limited</span>
              </a>

              {/* Navbar toggler for mobile */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Navbar items */}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto w-50 text-center">
                  {/* About Section */}
                  <li className="nav-item">
                    <Link to="/About" className="nav-link text-dark fs-5 fw-semibold">About</Link>
                  </li>

                  {/* Sign In Dropdown */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sign In
                    </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/emplogin">Employee</Link></li>
                      <li><Link className="dropdown-item" to="/adminlogin">Admin</Link></li>
                    </ul>
                  </li>
                </ul>

                {/* Registration Button */}
                <form className="d-flex">
                  <Link to="/registration">
                    <button className="btn btn-primary px-4 py-2 fs-5" type="button">Registration</button>
                  </Link>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
