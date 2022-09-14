import React from 'react';
import background from "./bg.png";
const Footer = () => {
    return (
        <section className="main-container">
        <div className="Footer">
            <h1>
                footer
            </h1>  
            <img src={require('./naturalsHq.png')} height={100} width={100}/>
            <p>Atopia Aadit (8th floor), House-3, Road-1/A, Block-J , Baridhara, Dhaka-1212, Bangladesh</p>
            <h4>UK Office</h4>
            <p>The Arches Cranberry Lane<br/>
London, E16 4BJ, United Kingdom.</p>
<img src={require('./call.png')} height={100} width={100}/>
<p>Care Line: +8809609 337 337</p>
<img src={require('./fb3.png')} height={40} width={40}/>
<img src={require('./twiter2.png')} height={40} width={40}/>
<img src={require('./linkedin2.png')} height={40} width={40}/>
<img src={require('./instagram2.jpg')} height={40} width={40}/>
<img src={require('./youtube2.png')} height={40} width={40}/> 

                   </div>  
                   </section>  
    );
};

export default Footer;
