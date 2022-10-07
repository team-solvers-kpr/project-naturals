import { AiFillGoogleCircle } from '@react-icons/all-files/ai/AiFillGoogleCircle';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { SiFacebook } from '@react-icons/all-files/si/SiFacebook';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../../../assests/login-signup/signup.png'
import './SignUp.css';
import CustomButton from '../../../shared/CustomButton/CustomButton';
import useAuth from '../../../../Hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import loadingGif from "../../../../assests/loading/2.gif";

const SignUp = () => {
    const { signInWithGoogle, registerUser, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleEmail = event => {
        const result = event.target.value;
        setEmail(result)
    }
    const handleName = event => {
        const result = event.target.value;
        setName(result)
    }
    const handlePassword = event => {
        const result = event.target.value;
        setPassword(result)
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }

    const handleRegistration = e => {
        e.preventDefault()
        registerUser(name, email, password)

    }

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };


    return (
        <div >
            <div className="container signup-container mt-5">
                <img className='signupPage-img' src={signup} alt="" />
                <div className="col-md-12 col-lg-4 col-xl-4 offset-xl-1">

                    <div className="divider d-flex align-items-center my-4">
                        <h1 className="text-center fw-bold mb-0">Sign Up</h1>
                    </div>
                    <form onSubmit={handleRegistration}>
                        <div className="form-outline">
                            <input type="text" id="form3Example3" className="form-control form-control-lg mb-2" onChange={handleName}
                                placeholder="Your Name" required />
                            <input type="email" id="form3Example3" className="form-control form-control-lg mb-2" onChange={handleEmail}
                                placeholder="Your Email" required />
                        </div>

                        <div className="form-outline mb-3">
                            <input type={passwordShown ? "text" : "password"} className="form-control form-control-lg mb-2" onChange={handlePassword}
                                placeholder="Enter a password" required />

                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" onClick={togglePassword} />
                            <label className="form-check-label">
                                Show Password
                            </label>
                        </div>
                        <div className="text-center text-lg-start mt-4 pt-2">
                            {
                                loading ? (<><img height="50" className='ms-4' src={loadingGif} alt="" /></>) : (<>  <CustomButton title="Sign Up" backgroundColor=" #00a651" color="#ffffff" border="2px solid #00a651" /></>)
                            }
                            <p className="small fw-bold mt-4 pt-1 mb-0">Login Your Account <Link to='/login'
                                className="link-success ms-1">Login Here</Link>
                            </p>
                        </div>
                    </form>




                    <br />
                    <br />
                    <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p className="lead fw-normal mb-0 me-3">Sign Up with</p>
                        <button onClick={handleGoogleSignIn} type="button" className="btn btn-floating mx-1" style={{ backgroundColor: "#00a651" }}>
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
                    <ToastContainer />
                </div>
            </div>



        </div >
    );
};

export default SignUp;