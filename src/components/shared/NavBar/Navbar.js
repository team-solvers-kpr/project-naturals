import React from 'react';
import navIcon from '../../../assests/nav/nav.png';
import './Navbar.css';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import { Link, NavLink } from 'react-router-dom';
import Carts from '../../Cart/Carts';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../redux/cartSlice';

const Navbar = () => {
    const cart = useSelector(selectCart);
    const handleSearch = e => {
        e.preventDefault()
    }
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#00a651" }}>
            <div className="container">
                <Link to="/" className="navbar-brand" aria-current="page"><img src={navIcon} alt="" className='nav-logo' /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <NavLink to="/home" className="nav-link" >HOME</NavLink>
                        <NavLink to="/pearl" className="nav-link" >PEARL</NavLink>
                        <NavLink to="/store" className="nav-link" >FIND STORE</NavLink>
                        <NavLink to="/becomeawholesaler" className="nav-link" >BECOME A WHOLESALER</NavLink>

                    </ul>
                    <form className="d-flex" onSubmit={handleSearch} >
                        <input className="form-control navbar-search-input" type="search" placeholder="I'm searching for..." aria-label="Search" />
                        <button className="navbar-search-btn" > <FiSearch />Search</button>
                    </form>

                    <div className="nav-item dropdown shoppingCart-icon">

                        <p className="nav-link dropdown-toggle" style={{ color: "white" }} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <IoCartOutline style={{ fontSize: "60px", paddingTop: "20px", color: "white" }} />
                            My Shopping Cart
                        </p>
                        <p className='cart-badge'><span >
                            {cart.length}
                        </span></p>
                        <ul className="dropdown-menu arrow" aria-labelledby="navbarDropdownMenuLink">
                            {
                                cart.length > 0 ? (<Carts />) : (
                                    <div className='text-center'>
                                        <p>You have no items in your shopping cart</p>
                                        <p>Subtotal: ৳0</p>
                                    </div>
                                )
                            }
                        </ul>
                    </div>
                    <ul className='navbar-nav'>
                        <div className='signup-signin-btn '>
                            <NavLink to="/signup" className="nav-link me-2 ps-3" >Sign Up</NavLink> <span style={{ color: "#fff" }}>/</span>
                            <NavLink to="/login" className="nav-link ms-2 pe-3" >Login</NavLink>
                        </div>
                    </ul>



                </div>
            </div>
        </nav >


    );
};

export default Navbar;