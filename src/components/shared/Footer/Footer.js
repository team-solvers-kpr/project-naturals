import React from 'react';
import bg from '../../../assests/footer/bg.png'
import './Footer.css';
import topIcon from '../../../assests/footer/1.png'
import locationIcon from '../../../assests/footer/2.png'
import callIcon from '../../../assests/footer/3.png'
import fbIcon from '../../../assests/footer/fb.png'
import instaIcon from '../../../assests/footer/insta.png'
import twitterIcon from '../../../assests/footer/twitter.png'
import linkedinIcon from '../../../assests/footer/linkedin.png'
import youtubeIcon from '../../../assests/footer/youtube.png'
import logo from '../../../assests/nav/nav.png'
import googlePlay from "../../../assests/footer/play.png"
import ssl from "../../../assests/footer/ssl.png"

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='footer'>
            <div>
                <img src={bg} alt="" className='footer-bg' />
                <center className='container footer-links'>
                    <span className='footer-link'>
                        <span className='footer-arrow'> ►</span>
                        About Us | </span>
                    <span className='footer-link'>
                        <span className='footer-arrow'> ►</span>
                        Contact Us | </span>
                    <span className='footer-link'>
                        <span className='footer-arrow'> ►</span>
                        FAQs | </span>
                    <span className='footer-link'>
                        <span className='footer-arrow'> ►</span>
                        Privacy Policy | </span>
                    <span className='footer-link'>
                        <span className='footer-arrow'> ►</span>
                        Return Policy | </span>
                    <span className='footer-link'>
                        <span className='footer-arrow'>►</span>
                        T&C</span>
                </center>
            </div>

            <div className='footer-section '>
                <center className="container">
                    <img className='topIcon' src={topIcon} alt="" /><br />
                    <img src={locationIcon} alt="" />
                    <h3 style={{
                        fontWeight: "bold", color: "#ffff", fontFamily: 'Source Sans Pro, sans-serif'
                    }}>Naturals HQ</h3>
                    <p style={{
                        fontWeight: "bold", color: "#ffff", fontFamily: 'Source Sans Pro, sans-serif'
                    }}>Atopia Aadit (8th floor), House-3, Road-1/A, Block-J , Baridhara, Dhaka-1212, Bangladesh</p>
                    <h3 style={{
                        fontWeight: "bold", color: "#ffff", fontFamily: 'Source Sans Pro, sans-serif'
                    }}>UK Office</h3>
                    <p style={{
                        fontWeight: "bold", color: "#ffff", marginTop: "30px", fontFamily: 'Source Sans Pro, sans-serif'
                    }}>The Arches Cranberry Lane <br />
                        London, E16 4BJ, United Kingdom.</p>
                    <img src={callIcon} alt="" /><br />
                    <h4 style={{
                        fontWeight: "bold", color: "#ffff", fontFamily: 'Source Sans Pro, sans-serif',
                    }}>Care Line: <a style={{ textDecoration: "none" }} href="callto:+8809609 337 337">+8809609 337 337</a></h4> <br />

                    <a className='footer-social-icon' href="https://www.facebook.com/" rel="noreferrer" target="_blank" >  <img src={fbIcon} alt="" /></a>
                    <a className='footer-social-icon' href="https://www.twitter.com/" rel="noreferrer" target="_blank" > <img src={twitterIcon} alt="" /></a>
                    <a className='footer-social-icon' href="https://www.linkedin.com/" rel="noreferrer" target="_blank" >  <img src={linkedinIcon} alt="" /></a>
                    <a className='footer-social-icon' href="https://www.instagram.com/" rel="noreferrer" target="_blank" >   <img src={instaIcon} alt="" /></a>
                    <a className='footer-social-icon' href="https://www.youtube.com/" rel="noreferrer" target="_blank" >    <img src={youtubeIcon} alt="" /> </a><br />


                    <img className='topIcon' src={topIcon} alt="" /><br />
                    <img src={logo} alt="" />
                    <h2 style={{
                        fontWeight: "bold", color: "#00a700", marginTop: "30px", fontFamily: 'Source Sans Pro, sans-serif'
                    }}>DOWNLOAD & ENJOY</h2>
                    <img src={googlePlay} alt="" /><br />
                    <img src={ssl} alt="" className='ssl' />
                    <p style={{
                        fontWeight: "bold", color: "#ffff", marginTop: "10px", fontFamily: 'Source Sans Pro, sans-serif'
                    }}>Copyright {year}©️ Naturals</p>
                </center>
            </div>
        </div>
    );
};

export default Footer;