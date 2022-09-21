import React from 'react';
import './Navbar.css'
import navImage from '../../../../assets/images/navBrand.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillFileArrowDownFill } from 'react-icons/bs';
const Navbar = () => {

    return (
        <div className='container-fluid navbar-color'>
            <nav className="navbar navbar-expand-lg container  py-2">
                <div className="d-flex">
                    <div className='logo'>
                        <a className="navbar-brand" href="index.html"><img className='image' src={navImage} alt="navbar image"/></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse item" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">HOME</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">PEARL</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">FIND STORE</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link">BECOME A WHOLESELLER</a>
                            </li>
                        </ul>


                        <form class="d-flex" role="search">
                            <input className="form-control me-2 relative" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success  absoulate" type="submit">Search</button>
                        </form>

                        <AiOutlineShoppingCart className='cart-icon ps-2'></AiOutlineShoppingCart>


                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            My shooping Cart
                            <BsFillFileArrowDownFill className='arrow-icon'></BsFillFileArrowDownFill>
                        </button>


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        ...
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

// <a className="navbar-brand" href="#"><img className="image src={navImage}></img></a>