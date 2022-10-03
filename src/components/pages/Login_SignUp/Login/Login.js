import { AiFillGoogleCircle } from '@react-icons/all-files/ai/AiFillGoogleCircle';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../../../assests/login-signup/login.png'
import CustomButton from '../../../shared/CustomButton/CustomButton';

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <div className="container signup-container mt-5">
                <img className='signupPage-img' src={login} alt="" />
                <div class="col-md-12 col-lg-4 col-xl-4 offset-xl-1">

                    <div class="divider d-flex align-items-center my-4">
                        <h1 class="text-center fw-bold mb-0">Login</h1>
                    </div>
                    <form >

                        <div class="form-outline">

                            <input type="email" id="form3Example3" class="form-control form-control-lg mb-2"
                                placeholder="Your Email" />
                        </div>

                        <div class="form-outline mb-3">
                            <input type={passwordShown ? "text" : "password"} class="form-control form-control-lg mb-2"
                                placeholder="Enter a password" />

                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={togglePassword} />
                            <label class="form-check-label" for="form2Example3">
                                Show Password
                            </label>
                        </div>
                    </form>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <CustomButton title="Login" backgroundColor=" #00a651" color="#ffffff" border="2px solid #00a651" />
                        <p class="small fw-bold mt-4 pt-1 mb-0">Create an account<Link to='/signup'
                            class="link-success ms-1">Sign up Here</Link>
                        </p>
                    </div>


                    <br />
                    <br />
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 me-3">Login with</p>
                        <button type="button" class="btn btn-success btn-floating mx-1">
                            <AiFillGoogleCircle
                                style={{ fontSize: "30px", color: "white" }} />
                        </button>

                        <button type="button" class="btn btn-success btn-floating mx-1">
                            <AiFillGithub
                                style={{ fontSize: "30px", color: "white" }} />
                        </button>

                        <button type="button" class="btn btn-success btn-floating mx-1">
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