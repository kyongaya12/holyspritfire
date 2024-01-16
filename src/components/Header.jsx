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
                <NavLink className="navbar-brand mx-auto fw-bold  d-sm-block d-md-none" to="/">Holy Sprit Fire 성령의불</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>

                    </button>
                  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      {/* <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">홈</NavLink>
                            </li>
                          
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/about">소개</NavLink>
                            </li>
                         
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/book">출판</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">연락처</NavLink>
                            </li>                          
                            
                        </ul>   */}

                <nav class="menu-link">
                    <ul>
                            <li>
                                <NavLink className="btn btn-outline-primary ms-2"  to="/home">홈</NavLink>
                            </li>                          
                            <li>
                                <NavLink className="btn btn-outline-primary ms-2" to="/about">소개</NavLink>
                            </li>                         
                            {/* <li>
                                <NavLink className="btn btn-outline-primary ms-2" to="/book">출판</NavLink>
                            </li> */}
                            <li>
                                <NavLink className="btn btn-outline-primary ms-2" to="/contact">연락처</NavLink>
                            </li>  
                    </ul>   
                </nav>
                       
                 <NavLink className="navbar-brand mx-auto fw-bold d-sm-none d-md-block" to="/">Holy Sprit Fire 성령의불</NavLink>
                    {/* <Login/>
                    <Signup/>
                    <CartBtn/> */}
                    <nav class="menu-link">
                    <ul>
                    <li><a href="https://www.edcitronnelliministries.com/events" className="btn btn-outline-primary ms-2" target="_blank">집회 스케줄</a></li>
                    <li><a href="https://www.edcitronnelliministries.com/" className="btn btn-outline-primary ms-2" target="_blank">휍사이트</a></li>
                    <li><a href="https://www.youtube.com/@EdCitronnelliMinistries" className="btn btn-outline-primary ms-2" target="_blank">유튜브 </a></li>
                    </ul>
                    </nav>
                    {/* <div className="menu-left">                   
                    <Youtube/>
                    <Website/>
                    <Market/></div> </div> */}
                 </div>
                </div>
            </nav>
        </>
    )
}

export default Header
