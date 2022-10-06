import { AiFillGoogleCircle } from '@react-icons/all-files/ai/AiFillGoogleCircle';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';
import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import login from '../../../../assests/login-signup/login.png'
import CustomButton from '../../../shared/CustomButton/CustomButton';
import './Login.css';
import useFirebase from '../../../../Hooks/useFirebase';

const Login = () => {
    const location = useLocation();

    const { signInWithGoogle } = useFirebase();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };



    const handleGoogleSignIn = () => {
        signInWithGoogle(location)
    }

    return (
        <div>
            <div className="container login-container mt-5">
                <img className='loginPage-img' src={login} alt="" />
                <div className="col-md-12 col-lg-4 col-xl-4 offset-xl-1">

                    <div className="divider d-flex align-items-center my-4">
                        <h1 className="text-center fw-bold mb-0">Login</h1>
                    </div>
                    <form >

                        <div className="form-outline">

                            <input type="email" id="form3Example3" className="form-control form-control-lg mb-2"
                                placeholder="Your Email" />
                        </div>

                        <div className="form-outline mb-3">
                            <input type={passwordShown ? "text" : "password"} className="form-control form-control-lg mb-2"
                                placeholder="Enter a password" />

                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={togglePassword} />
                            <label className="form-check-label" >
                                Show Password
                            </label>
                        </div>
                    </form>

                    <div className="text-center text-lg-start mt-4 pt-2">
                        <CustomButton title="Login" backgroundColor=" #00a651" color="#ffffff" border="2px solid #00a651" />
                        <p className="small fw-bold mt-4 pt-1 mb-0">Create an account<Link to='/signup'
                            className="link-success ms-1">Sign up Here</Link>
                        </p>
                    </div>


                    <br />
                    <br />

                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p className="lead fw-normal mb-0 me-3">Login with</p>
                        <button onClick={handleGoogleSignIn} type="button" className="btn  btn-floating mx-1" style={{ backgroundColor: "#00a651" }}>
                            <AiFillGoogleCircle
                                style={{ fontSize: "30px", color: "white" }} />
                        </button>

                        <button type="button" className="btn  btn-floating mx-1" style={{ backgroundColor: "#00a651" }}>
                            <AiFillGithub
                                style={{ fontSize: "30px", color: "white" }} />
                        </button>

                        <button type="button" className="btn btn-floating mx-1" style={{ backgroundColor: "#00a651" }}>
                            <SiFacebook
                                style={{ fontSize: "30px", color: "white" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;