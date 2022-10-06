import React from 'react';
import navIcon from '../../../assests/nav/nav.png';
import './Navbar.css';
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { Link, NavLink } from 'react-router-dom';
import NavCarts from '../../NavCarts/NavCarts';
import { useSelector } from 'react-redux';
import { selectCart, selectTotalItems } from '../../../redux/cartSlice';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const { user, loading, logOut } = useAuth()

    console.log(user)
    const cart = useSelector(selectCart);
    const cartItems = useSelector(selectTotalItems);
    const handleSearch = e => {
        e.preventDefault()
    }
    const stop = e => {
        e.stopPropagation()
    }
    const handleLogout = () => {
        swal("Logout Warning!", "Do you really want to logout?", "warning", {
            buttons: {
                cancel: "NO",
                catch: {
                    text: "YES",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        logOut()
                        swal("Well Done!", "You are successfully logged out!", "success");
                        break;
                    default: ;
                }
            });
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

                        <p className="nav-link dropdown-toggle" style={{ color: "white" }}
                            id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                            <IoCartOutline style={{ fontSize: "60px", paddingTop: "20px", color: "white" }} />
                            My Shopping Cart
                        </p>
                        <p className='cart-badge'><span >
                            {cartItems}
                        </span></p>
                        <ul className="dropdown-menu arrow"
                            onClick={stop}
                            aria-labelledby="navbarDropdownMenuLink">
                            {
                                cart.length > 0 ? (<>
                                    <NavCarts />

                                </>) : (
                                    <div className='mt-2'>
                                        <p>You have no items in your shopping cart</p>
                                        <p>Subtotal: ৳0</p>
                                    </div>
                                )

                            }

                        </ul>
                    </div>

                    {loading ? (<>
                        <ul className='navbar-nav'>


                        </ul>
                    </>) : (
                        <>
                            {user ? (<>


                                <div className="nav-item dropdown shoppingCart-icon ms-4">

                                    <p className="nav-link  dropdown-toggle" style={{ color: "white" }}
                                        id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" >
                                        {user?.photoURL ? (<img src={user.photoURL} width="50" height="50" style={{ background: "#ffff" }} className="rounded-circle border me-2" alt="" />) : (<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.pngs" width="50" height="50" style={{ background: "#ffff" }} className="rounded-circle border me-2" alt="" />)}
                                        {user.displayName}
                                    </p>

                                    <ul className="dropdown-menu profileDropdown"
                                        onClick={stop}
                                        aria-labelledby="navbarDropdownMenuLink">
                                        <p className="dropdown-item" ><MdDashboard className='me-1' />Dashboard</p>
                                        <p className="dropdown-item" >
                                            <CgProfile className='me-1' />Profile</p>
                                        <p className="dropdown-item" onClick={handleLogout}>
                                            <FiLogOut className='me-1' />Log Out</p>

                                    </ul>
                                </div>
                            </>) : (
                                <>
                                    <ul className='navbar-nav'>
                                        <div className='signup-signin-btn '>
                                            <NavLink to="/signup" className="nav-link me-2 ps-3" >Sign Up</NavLink> <span style={{ color: "#fff" }}>/</span>
                                            <NavLink to="/login" className="nav-link ms-2 pe-3" >Login</NavLink>
                                        </div>
                                    </ul>
                                </>
                            )}
                        </>
                    )}

                </div>
            </div>
        </nav >


    );
};

export default Navbar;