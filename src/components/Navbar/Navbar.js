import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <span>Holy Sprit Fire 
              성령의 불</span>
              {/* <i className="fas fa-code"></i> */}
              {/* <span className="icon">
                <CodeIcon />
              </span> */}
            </NavLink>
              <div className="nav-top">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact  to="/"  activeClassName="active" className="nav-links" onClick={handleClick} >홈 </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                 소개
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/book"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                출판
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  연락처
                </NavLink>
              </li>
            </ul>
            </div>
            <div className="nav-icon" onClick={handleClick}>
              {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
  
              {click ? (
                <span className="icon">
                  <HamburgetMenuOpen />{" "}
                </span>
              ) : (
                <span className="icon">
                  <HamburgetMenuClose />
                </span>
              )}
            </div>
          </div>
        </nav>
      </>
    );
  }
  

export default Navbar
