import React from 'react'
import { NavLink } from 'react-router-dom'
const Headers = () => {
  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Your Logo</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" data-bs-dismiss="collapse">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" data-bs-dismiss="collapse">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services" data-bs-dismiss="collapse">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" data-bs-dismiss="collapse">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Headers
