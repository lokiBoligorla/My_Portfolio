import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'
import user from '../../assets/User.png'
const Footer = () => {
  return (
    <div id="footer" className='footer'>
      <div className="footer-top">
        <dvi className="footer-top-left">
           <img src={logo} className='logo'/> 
           <p>Your vision, my creativity—together we can make magic happen!</p>
        </dvi>
        <div className="footer-top-right">
         <div className="footer-email-input">
            <img src={user}/>
            <input type="email" placeholder='enter your email' />
            </div>
             <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr/>
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Lokesh Boligorla. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
