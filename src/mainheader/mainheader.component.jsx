import "./mainheader.component.css";

import img5 from '../assets/images/img5.jpg';

import { BagFill } from "react-bootstrap-icons";
export function MainheaderComponent() {
    return (
        <div>
            {/* MAIN MENU START
            <div className="row justify-content-start header">
                <div className="col-2 icon mt-2">
                    <img src={iconlogo} ></img>
                </div>
                <div className="col-4 mt-2">
                    <div className="main-menu-navigation main-menu-navigation-demo">
                        <nav className="navigation-main-area ul-li">
                            <ul style={{ listStyleType: 'none' }}>
                                <li className="dropdown" >
                                    <a  data-bs-toggle="modal" data-bs-target="#productsModal" id="selectedProductItem">
                                        <span >
                                            <img className="product-logo-sm" src={img1} alt=""  ></img>
                                        </span>
                                        <span style={{color:'black' }}>Bayanno</span>
                                        <img className="dropdown-bottom-svg mx-2 " src={img2} ></img>
                                       
                                    </a>
                                </li>
                                <span>
                                    <li><a id="buyLink" className="buyNow-btn" target="_blank" style={{textDecoration:'none'}}><span> <BagFill></BagFill>&nbsp;&nbsp;Buy</span></a></li>
                                </span>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-3 mt-4">
                    <img src={img3} style={{ height: "40px" }}></img>
                </div>
                <div className="col-3 mt-4">
                    <img src={img4} style={{ height: "40px" }}></img>
                </div>
            </div> */}
             {/* MAIN MENU END */}
             {/* //---Start of Navbar---// */}


            <nav className="navbar navbar-expand-lg  navbar-light bg-default navbar--link-arrow navbar--uppercase bayanno-nav">
                <div className="container navbar-container">
                    {/* <!-- Brand/Logo --> */}
                    <a className="navbar-brand" href="/home">
                        <img src={img5} width="40" alt=""></img>
                        &nbsp; Bayanno Diagnostic Center        </a>

                    <div className="d-inline-block">
                        {/* <!-- Navbar toggler  --> */}
                        <button className="navbar-toggler hamburger hamburger-js hamburger--spring" type="button" data-toggle="collapse" data-target="#navbar_main" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">

                        {/* <!-- Navbar links --> */}
                        <ul className="navbar-nav" data-hover="dropdown">
                            <li className="nav-item active">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/home"><b style={{color:'#666666'}}>HOME</b></a>
                            </li>
                            <li className="nav-item dropdown dropdown-bottom ">
                                <a href="/department" className="nav-link pt-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b style={{color:'#666666'}}>DEPARTMENTS</b></a>

                                <ul className="dropdown-menu dropdownhover-bottom">
                                    <li>
                                    <b style={{color:'#666666'}}> ANESTHETICS</b>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="http://localhost:3000/"><b style={{color:'#666666'}}>CARDIOLOGY</b></a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="http://localhost:3000/"><b style={{color:'#666666'}}>GASTROENTEROLOGY</b></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/doctors"><b style={{color:'#666666'}}>DOCTORS</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/aboutus"> <b style={{color:'#666666'}}>ABOUT</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/appointments"><b style={{color:'#666666'}}>APPOINTMENT</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/blog"><b style={{color:'#666666'}}>BLOG</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/contactus"><b style={{color:'#666666'}}>CONTACT</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-haspopup="true" aria-expanded="false" href="/login"><b style={{color:'#666666'}}>LOGIN</b></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}