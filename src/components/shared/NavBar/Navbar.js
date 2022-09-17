import React from 'react';
import navIcon from '../../../assests/nav/nav.png';
import './Navbar.css';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <div >
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#00a651" }}>
                <div className="container">
                    <Link to="/" className="navbar-brand" aria-current="page"><img src={navIcon} alt="" width="188" /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link" aria-current="page">HOME</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/pearl" className="nav-link" aria-current="page">PEARL</Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/" tabIndex="-1" aria-disabled="true">FIND STORE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" tabIndex="-1" aria-disabled="true">BECOME A WHOLESALER</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control navbar-search-input" type="search" placeholder="Search" aria-label="Search" />
                            <button className="navbar-search-btn" type="submit"> <FiSearch />Search</button>
                        </form>

                        <div className="nav-item dropdown shoppingCart-icon">

                            <p className="nav-link dropdown-toggle" style={{ color: "white" }} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <IoCartOutline style={{ fontSize: "60px", paddingTop: "20px", color: "white" }} />
                                My Shopping Cart
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <h4 className='ms-3'>This is Cart</h4>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Navbar;