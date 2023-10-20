import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import Youtube from './buttons/Youtube'
import Website from './buttons/Website'
import Market from './buttons/Market'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid py-2">
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
               
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                         
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/video">Video</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                        </ul>     
                    <NavLink className="navbar-brand mx-auto fw-bold" to="/">에드 신처로넬리</NavLink> 
                    {/* <Login/>
                    <Signup/>
                    <CartBtn/> */}
                    <Youtube/>
                    <Website/>
                    <Market/></div>
                 
                </div>
            </nav>
        </>
    )
}

export default Header
