import React from 'react';
import "./Footer.css"
import borderElement from "../../../assets/images/boder-element.png"
import mapImage from "../../../assets/images/naturalsHq.png"
import callImage from "../../../assets/images/call.png"
import fbIcon from "../../../assets/icons/fb.png"
import twiterIcon from "../../../assets/icons/twiter.png"
import linkedinIcon from "../../../assets/icons/linkedin.png"
import instagramIcon from "../../../assets/icons/instagram.png"
import youtubeIcon from "../../../assets/icons/youtube.png"
import naturalsImage from "../../../assets/images/naturalsLogo.png"
import playStoreImage from "../../../assets/images/playStore.png"
import SSLCommerzIcon from "../../../assets/icons/SSLCommerz-Logos-1.png"
const Footer = () => {
    return (
        
        
        <div className="footer">
                     <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

            <div> 
            {/* <img src={background} height={2500} width={1500}/> */}
                <div>
                    <div style={{height:'200px'}}>
              
                    </div>


                </div>   
                <div>



                    <div>
                        <p className='aboutText'>About Us|Contact Us|FAQs|Shop|Privacy Policy|Return Policy|T&C|</p>    
                    </div>
                    <img src={borderElement} height={98} width={410}/>                     
                    <div className='map'><img src={mapImage} height={80} width={100}/></div>
                    <div className="whiteText">         
                    <p>Atopia Aadit (8th floor), House-3, Road-1/A, Block-J , Baridhara, Dhaka-1212, Bangladesh</p>
                    <h4>UK Office</h4>
                    <p>The Arches Cranberry Lane <br/> London, E16 4BJ, United Kingdom.</p>
                    </div>  
                    <img src={callImage} height={80} width={100}/> 
                    <p className='whiteText'>Care Line: +8809609 337 337</p>
                    <img src={fbIcon} height={60} width={60}/> 
                    <img src={twiterIcon} height={60} width={60}/> 
                    <img src={linkedinIcon} height={60} width={60}/>
                    <img src={instagramIcon} height={60} width={60}/>
                    <img src={youtubeIcon} height={60} width={60}/> <br></br>
                    <img src={borderElement} height={98} width={410}/> <br></br>
                    <img src={naturalsImage} height={50} width={300}/> <br></br>
                    <p className='downloadText'> DOWNLOAD & ENJOY</p>
                    <img src={playStoreImage} height={80} width={300}/> <br></br>
                    <img src={SSLCommerzIcon} height={100} width={1007}/> <br></br>
                </div>      
             
            </div>
        </div>  

                  
    );
};

export default Footer;
