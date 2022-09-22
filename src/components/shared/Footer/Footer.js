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
    return (
        <div>
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
                    <img src={topIcon} alt="" /><br />
                    <img src={locationIcon} alt="" />
                    <h3>Naturals HQ</h3>
                    <p>Atopia Aadit (8th floor), House-3, Road-1/A, Block-J , Baridhara, Dhaka-1212, Bangladesh</p>
                    <h3>UK Office</h3>
                    <p>The Arches Cranberry Lane <br />
                        London, E16 4BJ, United Kingdom.</p>
                    <img src={callIcon} alt="" /><br />
                    <h4>Care Line: +8809609 337 337</h4> <br />
                    <img src={fbIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={linkedinIcon} alt="" />
                    <img src={instaIcon} alt="" />
                    <img src={youtubeIcon} alt="" /> <br />
                    <img src={topIcon} alt="" /><br />
                    <img src={logo} alt="" />
                    <h2>DOWNLOAD & ENJOY</h2>
                    <img src={googlePlay} alt="" /><br />
                    <img src={ssl} alt="" className='ssl' />
                </center>
            </div>
        </div>
    );
};

export default Footer;