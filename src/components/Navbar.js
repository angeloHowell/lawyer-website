import React from "react";
import TopBanner from "../components/TopBanner";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <TopBanner />
        <nav className="navbar navbar-dark w-100 navbar-expand-md slide-in">
          <div className="container-xxl">
            {/* logo */}
            <div className="navbar-brand">
              <span>
                <img
                  src="/assets/LOGO2.png"
                  className="img-fluid logo-image"
                  alt="scales of justice logo"
                  width="70"
                  height="70"
                />
                 <img
                   src="/assets/component.png"
                   className="img-fluid px-0 logo-text"
                   alt="Howell & Abogados - Asesoría Legal Integral"
                   width="200"
                   height="100"
                 />
              </span>
            </div>
            {/* toggle button for mobile nav */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* navbar links  */}
            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item mx-3 mb-2">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#c2b697" : "#fff",
                      borderBottom: isActive ? "1px solid #c2b697" : "none",
                      paddingBottom: isActive ? "5px" : "0",
                    })}
                   >
                     Inicio
                   </NavLink>
                 </li>
                 <li className="nav-item mx-3 mb-2">
                   <NavLink
                     to="/servicios"
                     style={({ isActive }) => ({
                       textDecoration: "none",
                       color: isActive ? "#c2b697" : "#fff",
                       borderBottom: isActive ? "1px solid #c2b697" : "none",
                       paddingBottom: isActive ? "5px" : "0",
                     })}
                   >
                     Servicios
                   </NavLink>
                 </li>
                 <li className="nav-item mx-3 mb-2">
                   <NavLink
                     to="/especialidades"
                     style={({ isActive }) => ({
                       textDecoration: "none",
                       color: isActive ? "#c2b697" : "#fff",
                       borderBottom: isActive ? "1px solid #c2b697" : "none",
                       paddingBottom: isActive ? "5px" : "0",
                     })}
                   >
                     Especialidades
                   </NavLink>
                 </li>
                 <li className="nav-item mx-3 mb-2">
                   <NavLink
                     to="/honorarios"
                     style={({ isActive }) => ({
                       textDecoration: "none",
                       color: isActive ? "#c2b697" : "#fff",
                       borderBottom: isActive ? "1px solid #c2b697" : "none",
                       paddingBottom: isActive ? "5px" : "0",
                     })}
                   >
                     Honorarios
                   </NavLink>
                 </li>
                 <li className="nav-item mx-3 mb-2">
                   <NavLink
                     to="/contacto"
                     style={({ isActive }) => ({
                       textDecoration: "none",
                       color: isActive ? "#c2b697" : "#fff",
                       borderBottom: isActive ? "1px solid #c2b697" : "none",
                       paddingBottom: isActive ? "5px" : "0",
                     })}
                   >
                     Contacto
                   </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
